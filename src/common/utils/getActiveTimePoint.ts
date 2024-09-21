import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';
import { TIME_POINTS } from '../../common/constants/scheduleParams';

dayjs.extend(isBetween);
dayjs.extend(duration);

export const createDateTimeFromHoursAndMinutes = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);

  const today = dayjs().startOf('day');

  return today
    .hour(hours)
    .minute(minutes)
    .second(0);
};


export const getActiveTimePoint = () => {
  const PAIR_DURATION_IN_MINUTES = 95;
  const now = dayjs();

  return TIME_POINTS.findIndex((timePoint) => {
    const pairStartDate = createDateTimeFromHoursAndMinutes(timePoint);
    const pairEndDate = pairStartDate.add(PAIR_DURATION_IN_MINUTES, 'minute');

    return now.isBetween(pairStartDate, pairEndDate);
  });
};
