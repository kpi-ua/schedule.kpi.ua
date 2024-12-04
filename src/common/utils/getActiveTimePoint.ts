import dayjs from 'dayjs';
import { TIME_POINTS } from '../../common/constants/scheduleParams';

export const parseTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);

  const today = dayjs().startOf('day');

  return today.hour(hours).minute(minutes).second(0);
};

export const getActiveTimePoint = () => {
  const PAIR_DURATION_IN_MINUTES = 95;
  const now = dayjs();

  return TIME_POINTS.findIndex((timePoint) => {
    const pairStartDate = parseTime(timePoint);
    const pairEndDate = pairStartDate.add(PAIR_DURATION_IN_MINUTES, 'minute');

    return now.isBetween(pairStartDate, pairEndDate);
  });
};
