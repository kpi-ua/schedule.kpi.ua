'use client';

import { range } from 'lodash-es';
import React from 'react';

import { TimeDivider } from '@/components/time-divider';
import { useSliceOptionsContext } from '@/lib/context/slice-options-context';
import { useWeekContext } from '@/lib/context/week-context';
import { convertServerTimeToWeek } from '@/lib/utils/system.utils';
import { CurrentTime } from '@/models/CurrentTime';
import { Pair } from '@/models/Pair';
import { Schedule } from '@/models/Schedule';
import { ScheduleComponentsProps } from '@/types/ScheduleComponentsProps';
import { ScheduleMatrix, ScheduleMatrixRow } from '@/types/ScheduleMatrix';
import { Week } from '@/types/Week';

import { generateScheduleMatrix } from '../_utils/generate-schedule-matrix';
import { ScheduleHeader } from './schedule-header';
import ScheduleRow from './schedule-row';

interface ScheduleTableProps<T extends Pair> extends ScheduleComponentsProps<T> {
  schedule?: Schedule<T>;
  currentTime: CurrentTime;
  timeSlots: string[];
}

const getWeekSchedule = <T extends Pair>(schedule: Schedule<T> | undefined, week: Week) => {
  if (!schedule) {
    return [];
  }

  return week === 'firstWeek' ? schedule.scheduleFirstWeek : schedule.scheduleSecondWeek;
};

export const ScheduleTable = <T extends Pair>({
  schedule,
  currentTime,
  timeSlots,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleTableProps<T>) => {
  const { slice } = useSliceOptionsContext();
  const { currentWeek } = useWeekContext();
  const [start, end] = slice;

  const isCurrentWeekSelected = convertServerTimeToWeek(currentTime.currentWeek) === currentWeek;
  const currentDayColumn = isCurrentWeekSelected
    ? range(start, end + 1).indexOf(currentTime.currentDay || 0) + 1
    : undefined;

  const generateScheduleRows = (scheduleMatrix: ScheduleMatrix<T>, timeSlots: string[]) => {
    return scheduleMatrix.map((item: ScheduleMatrixRow<T>, i: number) => {
      const [start, end] = slice;
      const slicedDataset = item.slice(start - 1, end);

      if (i + 1 > timeSlots?.length) {
        return null;
      }

      return (
        <React.Fragment key={i}>
          <TimeDivider value={timeSlots[i]} />
          <ScheduleRow
            key={i}
            scheduleMatrixCell={slicedDataset}
            baseComponent={BaseComponent}
            baseComponentExtended={BaseComponentExtended}
          />
        </React.Fragment>
      );
    });
  };

  if (!timeSlots?.length) {
    return null;
  }

  const weekSchedule = getWeekSchedule(schedule, currentWeek);

  const scheduleMatrix = generateScheduleMatrix<T>(
    weekSchedule,
    timeSlots,
    isCurrentWeekSelected ? currentTime.currentLesson : undefined,
  );

  return (
    <div className="relative m-3 grid grid-cols-1 gap-x-6 gap-y-2.5 pl-17 sm:grid-cols-2 sm:pl-25 lg:grid-cols-3 2xl:grid-cols-6">
      {currentDayColumn ? (
        <div
          className="absolute top-0 -bottom-3 -left-3 z-0 w-[calc(100%+1.5rem)] bg-current-day sm:-top-3"
          style={{ gridColumn: `${currentDayColumn} / span 1` }}
        />
      ) : null}
      <ScheduleHeader />
      {generateScheduleRows(scheduleMatrix, timeSlots)}
    </div>
  );
};
