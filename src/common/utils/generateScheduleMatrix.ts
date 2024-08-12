import { DAYS, TIME_POINTS } from "../../common/constants/scheduleParams";
import { getActiveTimePoint } from "../../common/utils/getActiveTimePoint";
import moment from "moment";

type WeekSchedule = Array<{ day: any; pairs: any[] }>;

export const generateScheduleMatrix = (weekSchedule: WeekSchedule) => {
  const scheduleMatrix = new Array(TIME_POINTS.length)
    .fill(null)
    .map(() => new Array(DAYS.length).fill(null));
  const activePair = getActiveTimePoint();
  const currentDay = moment().day() - 1;

  weekSchedule.forEach((day) => {
    const yIndex = DAYS.findIndex((item) => item === day.day);

    day.pairs.forEach((pair) => {
      const xIndex = TIME_POINTS.findIndex((item) => item === pair.time);
      const cell = scheduleMatrix[xIndex][yIndex];
      let newCell = {
        ...pair,
        currentDay:
          activePair !== -1 && currentDay === yIndex && activePair === xIndex,
      };

      if (cell) {
        let extendedCell: any[] = [];

        if (Array.isArray(cell)) {
          extendedCell = [...cell];
        } else {
          extendedCell = [cell];
        }

        extendedCell.push({ ...pair, currentDay: newCell.currentDay });
        newCell = extendedCell;
      }

      scheduleMatrix[xIndex][yIndex] = newCell;
    });
  });

  return scheduleMatrix;
};
