'use server';

const TIMEOUT_MS = 5000;

import { cookies } from 'next/headers';
import { headers as nextHeaders } from 'next/headers';

import { serverEnv } from '@/env/server-env';

import { KPI_ID_SIGN_IN_COOKIE_NAME } from '../constants/common';

interface CustomRequestInit extends RequestInit {
  omitUnauthorizedCheck?: boolean;
}

const Client = (basePath: string) => {
  return async <T>(url: string | URL, options: CustomRequestInit = {}) => {
    const { headers = {}, omitUnauthorizedCheck = false, ...otherOptions } = options;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const resolvedCookies = await cookies();
    const jwt = resolvedCookies.get(KPI_ID_SIGN_IN_COOKIE_NAME)?.value;

    const input = new URL(url, basePath).href;

    const contentType = new Headers(headers).get('Content-type') ?? 'application/json';
    const resolvedHeaders = await nextHeaders();

    try {
      const response = await fetch<T>(input, {
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
          Authorization: jwt ? `Bearer ${jwt}` : '',
          'Content-Type': contentType,
          'X-Forwarded-For': resolvedHeaders.get('x-forwarded-for') || '',
          'X-Real-IP': resolvedHeaders.get('x-real-ip') || '',
          ...(serverEnv.CAMPUS_API_KEY ? { 'X-Api-Key': serverEnv.CAMPUS_API_KEY } : {}),
          ...headers,
        },
        signal: controller.signal,
        ...otherOptions,
      });

      if (!omitUnauthorizedCheck && response.status === 401) {
        // TODO: Logout
      }

      return response;
    } finally {
      clearTimeout(timeout);
    }
  };
};

export const campusFetch = Client(serverEnv.CAMPUS_API_URL);
