'use server';

import JWT from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { serverEnv } from '@/env';

import { TOKEN_COOKIE_NAME } from '../constants/common';

export async function setLoginCookies(token: string) {
  const tokenData = JWT.decode(token) as { exp: number };

  // exp is in seconds, Date expects milliseconds
  const expires = new Date(tokenData.exp * 1000);
  const resolvedCookies = await cookies();

  resolvedCookies.set(TOKEN_COOKIE_NAME, token, { domain: serverEnv.MAIN_COOKIE_DOMAIN, httpOnly: true, expires });
}

export async function deleteLoginCookies() {
  const resolvedCookies = await cookies();

  resolvedCookies.delete({ domain: serverEnv.MAIN_COOKIE_DOMAIN, name: TOKEN_COOKIE_NAME });
}
