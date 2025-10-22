import dayjs from 'dayjs';

/**
 * Checks if a date is today or in the future
 */
export const isDateTodayOrFuture = (date: string): boolean =>
  dayjs().isBefore(date, 'date') || dayjs().isSame(date, 'date');
