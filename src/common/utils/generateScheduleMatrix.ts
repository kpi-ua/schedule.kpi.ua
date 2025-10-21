import { DAYS } from '../constants/scheduleParams';
import { Pair } from '../../models/Pair';
import { WeekSchedule } from '../../models/WeekSchedule';
import dayjs from 'dayjs';
import { ScheduleMatrix, ScheduleMatrixCell } from '../../types/ScheduleMatrix';

export const generateScheduleMatrix = <T extends Pair>(
  weekSchedule: WeekSchedule<T>[],
  timeSlots: string[],
  currentLesson = 0,
): ScheduleMatrix<T> => {
  const scheduleMatrix = new Array(timeSlots.length).fill(null).map(() => new Array(DAYS.length).fill(null));

  const currentDay = dayjs().day();

  const activePair = currentLesson - 1;

  weekSchedule.forEach((schedule) => {
    const yIndex = DAYS.findIndex((item) => item === schedule.day);

    schedule.pairs.forEach((pair) => {
      // Skip pairs with only past dates (irregular lessons that have already occurred)
      if (pair.dates.length > 0) {
        const hasFutureDates = pair.dates.some((date) =>
          dayjs().isSameOrBefore(date, 'date')
        );
        if (!hasFutureDates) {
          return; // Skip this pair
        }
      }

      const xIndex = timeSlots.indexOf(pair.time);
      const cell = scheduleMatrix[xIndex][yIndex];
      let newCell: ScheduleMatrixCell<T> | ScheduleMatrixCell<T>[] = {
        pair,
        currentPair: activePair !== -1 && currentDay === yIndex + 1 && activePair === xIndex,
      };

      if (cell) {
        let extendedCell: ScheduleMatrixCell<T>[] = [];

        if (Array.isArray(cell)) {
          extendedCell = [...cell];
        } else {
          extendedCell = [cell];
        }

        extendedCell.push({ pair, currentPair: newCell.currentPair });
        newCell = extendedCell;
      }

      scheduleMatrix[xIndex][yIndex] = newCell;
    });
  });

  return scheduleMatrix;
};
