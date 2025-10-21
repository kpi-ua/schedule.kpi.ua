import dayjs from 'dayjs';

/**
 * Checks if a date is today or in the future
 */
const isDateTodayOrFuture = (date: string): boolean =>
  dayjs().isBefore(date, 'date') || dayjs().isSame(date, 'date');

/**
 * Filters dates to include only today and future dates
 */
export const filterFutureDates = (dates: string[]): string[] =>
  dates.filter(isDateTodayOrFuture);

/**
 * Checks if an array of dates contains at least one future or current date
 */
export const hasFutureDates = (dates: string[]): boolean =>
  dates.some(isDateTodayOrFuture);

