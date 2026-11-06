import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { campusFetch } from '@/lib/campusApi/client';
import { LOGIN_FAILURE, LoginFailure, ROUTES, USER_NOT_REGISTERED_CODE } from '@/lib/constants/common';
import { setLoginCookies } from '@/lib/server/auth';
import { KPIIDAuthorizationError, deletePendingSignIn, readPendingSignIn, validateCallback } from '@/lib/server/kpi-id';
import { getJWTPayload } from '@/lib/utils/jwt.utils';
import { KPIIDPendingSignIn, KPIIDTokenResponse } from '@/models/kpi-id';
import { ScheduleJwtPayload } from '@/types/schedule-jwt-payload';

type CodeExchangeResult = { ok: true; token: string } | { ok: false; reason: LoginFailure };

const failurePath = (failure: LoginFailure) => `${ROUTES.LOGIN_FAILED_PATH}?reason=${failure}`;

// The API answers business failures with an RFC 7807 payload carrying a machine-readable `code`.
const readBusinessErrorCode = async (response: Response) => {
  try {
    const body = (await response.json()) as { code?: unknown };

    return typeof body.code === 'string' ? body.code : undefined;
  } catch {
    return undefined;
  }
};

async function exchangeCode(
  code: string,
  issuer: string | null,
  pending: KPIIDPendingSignIn,
): Promise<CodeExchangeResult> {
  try {
    // omitUnauthorizedCheck: this is an anonymous call, so there is no session for
    // signFetch's 401 handler to clear — and its logout() would abort the redirect
    // to the login-failed page.
    const response = await campusFetch<KPIIDTokenResponse>('/auth/kpi-id', {
      method: 'POST',
      body: JSON.stringify({
        code,
        codeVerifier: pending.codeVerifier,
        nonce: pending.nonce,
        issuer,
      }),
      omitUnauthorizedCheck: true,
    });

    if (!response.ok) {
      const errorCode = await readBusinessErrorCode(response);

      return {
        ok: false,
        reason: errorCode === USER_NOT_REGISTERED_CODE ? LOGIN_FAILURE.USER_NOT_REGISTERED : LOGIN_FAILURE.GENERIC,
      };
    }

    return { ok: true, token: (await response.json()).access_token };
  } catch (error) {
    // Transport failures and malformed success payloads land on the same
    // login-failed page as business failures; the browser never sees a raw 500.
    console.error('KPI ID code exchange failed:', error);

    return { ok: false, reason: LOGIN_FAILURE.GENERIC };
  }
}

// The redirect URI registered for KPI.Sign in KPI ID: `?code=...&state=...&iss=...`, or `?error=...`
// when KPI ID refused the sign-in (e.g. `access_denied` for a person without an RNOKPP).
export async function GET(request: NextRequest) {
  const pending = await readPendingSignIn();

  // No sign-in was started in this browser, or it was started longer ago than the cookie lives.
  if (!pending) {
    redirect(failurePath(LOGIN_FAILURE.GENERIC));
  }

  // `/api` is outside the locale middleware: the locale is the one the sign-in was started from.
  const parameters = request.nextUrl.searchParams;

  let code: string;

  try {
    code = validateCallback(parameters, pending);
  } catch (error) {
    if (error instanceof KPIIDAuthorizationError) {
      // KPI ID refused this sign-in: `access_denied` when it could not establish the person.
      await deletePendingSignIn();
      console.warn('KPI ID refused the sign-in:', error.error);

      redirect(failurePath(error.error === 'access_denied' ? LOGIN_FAILURE.ACCESS_DENIED : LOGIN_FAILURE.GENERIC));
    }

    // The state ties the callback to a sign-in this browser started: without the check anyone could
    // send the user here with a code of their own and sign them in to someone else's account. The
    // cookie stays, so a forged callback does not cancel the real sign-in. Only the message is
    // logged: the parameters carry the code, and a code is a credential.
    console.error('KPI ID callback rejected:', error instanceof Error ? error.message : error);

    redirect(failurePath(LOGIN_FAILURE.GENERIC));
  }

  // Each sign-in is completed once: the code is single-use.
  await deletePendingSignIn();

  const result = await exchangeCode(code, parameters.get('iss'), pending);

  if (!result.ok) {
    redirect(failurePath(result.reason));
  }

  const payload = getJWTPayload<ScheduleJwtPayload>(result.token);

  if (!payload) {
    redirect(failurePath(LOGIN_FAILURE.GENERIC));
  }

  await setLoginCookies(result.token);

  redirect(ROUTES.ROOT);
}
