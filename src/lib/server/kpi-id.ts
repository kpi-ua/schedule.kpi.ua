import 'server-only';
import { cookies } from 'next/headers';
import { type NextResponse } from 'next/server';
import { z } from 'zod';

import { serverEnv } from '@/env/server-env';
import { KPIIDPendingSignIn, KPIIDSignInStartResponse } from '@/models/kpi-id';

import { campusFetch } from '../campusApi/client';
import { KPI_ID_SIGN_IN_COOKIE_NAME } from '../constants/common';

// KPI ID OpenID Connect sign-in: the site generates the state, nonce and PKCE verifier of a sign-in
// and keeps them in an httpOnly cookie; the API owns the registration in KPI ID (client id, secret,
// redirect URI), builds the authorization request and redeems the code. See https://auth.kpi.ua/uk/integration.

// Sent only to the KPI ID routes. Lax, so the top-level redirect back from KPI ID carries it.
// It outlives the sign-in at KPI ID (a Diia or BankID sign-in can take minutes) and nothing more.
const COOKIE_PATH = '/api/kpi-id';
const COOKIE_MAX_AGE_SECONDS = 15 * 60;

const pendingSignInSchema = z.object({
  state: z.string().nonempty(),
  nonce: z.string().nonempty(),
  codeVerifier: z.string().nonempty(),
});

/** 32 random bytes as base64url: the size openid-client uses for state, nonce and PKCE verifiers. */
const randomValue = () => Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString('base64url');

/** The S256 PKCE challenge of a verifier (RFC 7636). */
const calculateCodeChallenge = async (codeVerifier: string) =>
  Buffer.from(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier))).toString('base64url');

export const createPendingSignIn = (): KPIIDPendingSignIn => ({
  state: randomValue(),
  nonce: randomValue(),
  codeVerifier: randomValue(),
});

/**
 * The authorization request of a sign-in, built by the API (authorization code flow with PKCE, S256).
 *
 * @throws {Error} The API could not build it (KPI ID's discovery document was unavailable).
 */
export async function buildAuthorizationUrl({ state, nonce, codeVerifier }: KPIIDPendingSignIn) {
  // omitUnauthorizedCheck: an anonymous call; signFetch's 401 handler would log out of nothing.
  const response = await campusFetch<KPIIDSignInStartResponse>('/auth/kpi-id/start', {
    method: 'POST',
    body: JSON.stringify({ state, nonce, codeChallenge: await calculateCodeChallenge(codeVerifier) }),
    omitUnauthorizedCheck: true,
  });

  if (!response.ok) {
    throw new Error(`The API refused to start the KPI ID sign-in: ${response.status}`);
  }

  return new URL((await response.json()).authorization_url);
}

/** KPI ID refused the sign-in: `?error=...` on the redirect URI (RFC 6749 §4.1.2.1). */
export class KPIIDAuthorizationError extends Error {
  constructor(public readonly error: string) {
    super(`KPI ID answered the sign-in with ${error}`);
  }
}

/**
 * Checks what KPI ID brought the browser back with against the sign-in it started, and returns the code.
 * The `iss` parameter (RFC 9207) is checked by the API, which knows the issuer.
 *
 * @throws {KPIIDAuthorizationError} KPI ID answered this sign-in with an error.
 * @throws {Error} The response does not belong to this sign-in (state), or carries no code.
 */
export function validateCallback(parameters: URLSearchParams, { state }: KPIIDPendingSignIn) {
  if (parameters.get('state') !== state) {
    throw new Error('The state does not match the pending sign-in');
  }

  const error = parameters.get('error');

  if (error) {
    throw new KPIIDAuthorizationError(error);
  }

  const code = parameters.get('code');

  if (!code) {
    throw new Error('The callback carries neither a code nor an error');
  }

  return code;
}

export function savePendingSignIn(response: NextResponse, pending: KPIIDPendingSignIn) {
  response.cookies.set(KPI_ID_SIGN_IN_COOKIE_NAME, JSON.stringify(pending), {
    httpOnly: true,
    secure: serverEnv.NODE_ENV === 'production',
    sameSite: 'lax',
    path: COOKIE_PATH,
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });
}

export async function readPendingSignIn(): Promise<KPIIDPendingSignIn | undefined> {
  const value = (await cookies()).get(KPI_ID_SIGN_IN_COOKIE_NAME)?.value;

  if (!value) {
    return undefined;
  }

  try {
    const pending = pendingSignInSchema.safeParse(JSON.parse(value));

    return pending.success ? pending.data : undefined;
  } catch {
    return undefined;
  }
}

/** Each sign-in can be completed once. */
export async function deletePendingSignIn() {
  (await cookies()).delete({ name: KPI_ID_SIGN_IN_COOKIE_NAME, path: COOKIE_PATH });
}
