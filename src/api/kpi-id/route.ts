import { redirect, RedirectType } from 'next/navigation';
import { NextResponse } from 'next/server';

import { LOGIN_FAILURE, ROUTES } from '@/lib/constants/common';
import { buildAuthorizationUrl, createPendingSignIn, savePendingSignIn } from '@/lib/server/kpi-id';

// Starts the KPI ID sign-in (OpenID Connect, authorization code flow with PKCE). The state, nonce and
// PKCE verifier stay in an httpOnly cookie until KPI ID sends the browser back to the callback route.
// This is also the initiate login URI registered in KPI ID: its catalog adds `iss` and
// `target_link_uri`, which are ignored, as the KPI ID integration guide allows.
// `/api` is outside the locale middleware, so the button passes its locale as `?locale=`; the cookie
// carries it to the callback.
export async function GET() {
  const pending = createPendingSignIn();

  let authorizationUrl: URL;

  try {
    authorizationUrl = await buildAuthorizationUrl(pending);
  } catch (error) {
    // The API, or KPI ID behind it, could not be reached.
    console.error('KPI ID sign-in could not be started:', error);

    redirect(`${ROUTES.LOGIN_FAILED_PATH}?reason=${LOGIN_FAILURE.GENERIC}`, RedirectType.replace);
  }

  const response = NextResponse.redirect(authorizationUrl);

  savePendingSignIn(response, pending);

  return response;
}
