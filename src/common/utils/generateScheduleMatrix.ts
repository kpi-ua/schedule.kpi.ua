import { DAYS, TIME_POINTS } from '../constants/scheduleParams';
import { parseTime } from './parseTime';

import { Pair } from '../../models/Pair';
import { WeekSchedule } from '../../models/WeekSchedule';
import dayjs from 'dayjs';

export interface ScheduleMatrixCell extends Pair {
  currentPair: boolean;
}

export type UnknownScheduleMatrixCell = ScheduleMatrixCell | ScheduleMatrixCell[] | null;
export type ScheduleMatrixRow = UnknownScheduleMatrixCell[];

export type ScheduleMatrix = ScheduleMatrixRow[];

export const generateScheduleMatrix = <T extends Pair>(
  weekSchedule: WeekSchedule<T>[],
  currentLesson = 0,
): ScheduleMatrix => {
  const scheduleMatrix = new Array(TIME_POINTS.length).fill(null).map(() => new Array(DAYS.length).fill(null));

  const currentDay = dayjs().day();

  const activePair = currentLesson - 1;

  weekSchedule.forEach((schedule) => {
    const yIndex = DAYS.findIndex((item) => item === schedule.day);

    schedule.pairs.forEach((pair) => {
      const normalizedPairTime = parseTime(pair.time).format('HH:mm');
      const xIndex = TIME_POINTS.findIndex((item) => item === normalizedPairTime);
      const cell = scheduleMatrix[xIndex][yIndex];
      let newCell: ScheduleMatrixCell | ScheduleMatrixCell[] = {
        ...pair,
        currentPair: activePair !== -1 && currentDay === yIndex + 1 && activePair === xIndex,
      };

      if (cell) {
        let extendedCell: ScheduleMatrixCell[] = [];

        if (Array.isArray(cell)) {
          extendedCell = [...cell];
        } else {
          extendedCell = [cell];
        }

        extendedCell.push({ ...pair, currentPair: newCell.currentPair });
        newCell = extendedCell;
      }

      scheduleMatrix[xIndex][yIndex] = newCell;
    });
  });

  return scheduleMatrix;
};
