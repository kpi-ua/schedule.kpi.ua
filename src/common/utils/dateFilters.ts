import dayjs from 'dayjs';

/**
 * Filters dates to include only today and future dates
 */
export const filterFutureDates = (dates: string[]): string[] =>
  dates.filter((date) => dayjs().isBefore(date, 'date') || dayjs().isSame(date, 'date'));

/**
 * Checks if an array of dates contains at least one future or current date
 */
export const hasFutureDates = (dates: string[]): boolean =>
  dates.some((date) => dayjs().isBefore(date, 'date') || dayjs().isSame(date, 'date'));

