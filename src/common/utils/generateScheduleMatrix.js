import { DAYS, TIME_POINTS } from '../../common/constants/scheduleParams';

export const generateScheduleMatrix = weekSchedule => {
  const scheduleMatrix = new Array(TIME_POINTS.length).fill(null).map(() => new Array(DAYS.length).fill(null));

  weekSchedule.forEach(day => {
    const yIndex = DAYS.findIndex(item => item === day.day);

    day.pairs.forEach(pair => {
      const xIndex = TIME_POINTS.findIndex(item => item === pair.time);

      scheduleMatrix[xIndex][yIndex] = pair;
    });
  });

  return scheduleMatrix;
};