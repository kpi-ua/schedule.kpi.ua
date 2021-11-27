import moment from 'moment';
import { TIME_POINTS } from '../../common/constants/scheduleParams';

export const getActiveTimePoint = () => {
  const PAIR_DURATION_IN_MINUTES = 95;
  const now = moment();

  return TIME_POINTS.findIndex((timePoint, i) => {
    const timeNumbers = timePoint.split('.').map(item => +item);
    const pairStartDate = moment().set({hours: timeNumbers[0], minutes: timeNumbers[1], seconds: 0});
    const pairEndDate = moment(pairStartDate).set({minutes: timeNumbers[1] + PAIR_DURATION_IN_MINUTES})

    return now.isBetween(pairStartDate, pairEndDate);
  });
};