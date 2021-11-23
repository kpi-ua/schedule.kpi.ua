import { DAYS, TIME_POINTS } from '../../common/constants/scheduleParams';

export const generateScheduleMatrix = weekSchedule => {
  const scheduleMatrix = new Array(TIME_POINTS.length).fill(null).map(() => new Array(DAYS.length).fill(null));

  weekSchedule.forEach(day => {
    const yIndex = DAYS.findIndex(item => item === day.day);

    day.pairs.forEach(pair => {
      console.dir(TIME_POINTS)
      console.log(pair.time)
      const xIndex = TIME_POINTS.findIndex(item => item === pair.time);
      console.dir(scheduleMatrix)
      console.log(xIndex)
      console.log(yIndex)
      scheduleMatrix[xIndex][yIndex] = pair;
    });
  });

  return scheduleMatrix;
};