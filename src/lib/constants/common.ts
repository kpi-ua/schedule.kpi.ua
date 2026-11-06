import { SubjectType } from '@/models/pair';
import { ListOption } from '@/types/list-option';
import { ScreenSize } from '@/types/screen-size';

export const TOKEN_COOKIE_NAME = 'kpi-sign-token';

/** Holds the state, nonce and PKCE verifier of a KPI ID sign-in until KPI ID redirects back. */
export const KPI_ID_SIGN_IN_COOKIE_NAME = 'kpi-id-sign-in';

export const ROUTES = {
  ROOT: '/',
  LOGIN_FAILED_PATH: '/login-failed',
} as const;

/**
 * Business error code returned by the API when authentication resolved an identity,
 * but that identity is not registered in KPI.Sign.
 * Mirrors `KPI.Sign.Domain.Exceptions.UserNotRegisteredException`.
 */
export const USER_NOT_REGISTERED_CODE = 'USER_NOT_REGISTERED';

/** `reason` query values understood by the login failure page. */
export const LOGIN_FAILURE = {
  USER_NOT_REGISTERED: 'user-not-registered',
  // KPI ID answered `access_denied`: it could not establish the person (no RNOKPP for this sign-in method).
  ACCESS_DENIED: 'access-denied',
  GENERIC: 'error',
} as const;

export type LoginFailure = (typeof LOGIN_FAILURE)[keyof typeof LOGIN_FAILURE];

export const CACHE_TTL_ONE_MINUTE = 60;

// Cache lists for half an hour to update them in terms of rapid schedule changes (start of the year)
export const CACHE_TTL_HALF_AN_HOUR = 30 * CACHE_TTL_ONE_MINUTE;

// Cache time slots for quarter of a year (3 months)
export const CACHE_TTL_TIME_SLOTS = 60 * 24 * 90 * CACHE_TTL_ONE_MINUTE;

export type DaysRange = `${number}-${number}`;

export const DAY_OPTIONS: Partial<Record<ScreenSize, ListOption<DaysRange>[]>> = {
  [ScreenSize.ExtraSmall]: [
    { label: 'ПН', value: '1-1' },
    { label: 'ВТ', value: '2-2' },
    { label: 'СР', value: '3-3' },
    { label: 'ЧТ', value: '4-4' },
    { label: 'ПТ', value: '5-5' },
    { label: 'СБ', value: '6-6' },
  ],
  [ScreenSize.Small]: [
    { label: 'ПН-ВТ', value: '1-2' },
    { label: 'СР-ЧТ', value: '3-4' },
    { label: 'ПТ-СБ', value: '5-6' },
  ],
  [ScreenSize.Medium]: [
    { label: 'ПН-СР', value: '1-3' },
    { label: 'ЧТ-СБ', value: '4-6' },
  ],
} as const;

export const DAYS_FULL = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'] as const;
export const DAYS_SHORT = ['Пн', 'Вв', 'Ср', 'Чт', 'Пт', 'Сб'] as const;

export const SUBJECT_TYPES: Record<SubjectType, string> = {
  [SubjectType.Lab]: 'Лабораторна',
  [SubjectType.Lecture]: 'Лекція',
  [SubjectType.Practice]: 'Практика',
} as const;
