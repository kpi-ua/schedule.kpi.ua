import { DAYS, TIME_POINTS } from '../../common/constants/scheduleParams';
import { getActiveTimePoint } from '../../common/utils/getActiveTimePoint';
import moment from 'moment';

export const generateScheduleMatrix = weekSchedule => {
  const scheduleMatrix = new Array(TIME_POINTS.length).fill(null).map(() => new Array(DAYS.length).fill(null));
  const activePair = getActiveTimePoint();
  const currentDay = moment().day() - 1;

  weekSchedule.forEach(day => {
    const yIndex = DAYS.findIndex(item => item === day.day);

    day.pairs.forEach(pair => {
      const xIndex = TIME_POINTS.findIndex(item => item === pair.time);

      scheduleMatrix[xIndex][yIndex] = {...pair, currentDay: currentDay === yIndex && activePair === xIndex};
    });
  });

  return scheduleMatrix;
};