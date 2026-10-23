import { SubjectType } from '@/models/Pair';
import { ListOption } from '@/types/ListOption';
import { ScreenSize } from '@/types/ScreenSize';

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
};

export const DAYS_FULL = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
export const DAYS_SHORT = ['Пн', 'Вв', 'Ср', 'Чт', 'Пт', 'Сб'];

export const SUBJECT_TYPES: Record<SubjectType, string> = {
  [SubjectType.Lab]: 'Лабораторна',
  [SubjectType.Lecture]: 'Лекція',
  [SubjectType.Practice]: 'Практика',
};
