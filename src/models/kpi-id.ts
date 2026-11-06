/** What the browser keeps between the start of a KPI ID sign-in and the callback. */
export interface KPIIDPendingSignIn {
  state: string;
  nonce: string;
  codeVerifier: string;
}

/** The authorization request built by `POST /auth/kpi-id/start`. */
export interface KPIIDSignInStartResponse {
  authorization_url: string;
}

/** The KPI.Sign token issued by `POST /auth/kpi-id`. */
export interface KPIIDTokenResponse {
  access_token: string;
}
