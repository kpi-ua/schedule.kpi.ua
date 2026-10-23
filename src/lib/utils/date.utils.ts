import dayjs from 'dayjs';

/**
 * Checks if a date is today or in the future
 */
export const isDateTodayOrFuture = (date: string): boolean =>
  dayjs().isBefore(date, 'date') || dayjs().isSame(date, 'date');

export const parseTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);

  if (isNaN(hours) || isNaN(minutes)) {
    return undefined;
  }

  const today = dayjs().startOf('day');

  return today.hour(hours).minute(minutes).second(0);
};
