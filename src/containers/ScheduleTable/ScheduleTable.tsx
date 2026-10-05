'use client';

import React from 'react';
import { generateScheduleMatrix } from '../../common/utils/generateScheduleMatrix';
import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import { CurrentTime } from '../../models/CurrentTime';
import { ScheduleHeader } from '../ScheduleHeader';
import ScheduleRow from '../ScheduleRow';
import TimeDivider from '../../components/TimeDivider';
import { range } from 'lodash-es';
import { useSliceOptionsContext } from '../../common/context/SliceOptionsContext';
import { useWeekContext } from '../../common/context/WeekContext';
import { ScheduleMatrix, ScheduleMatrixRow } from '../../types/ScheduleMatrix';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';
import { Week } from '../../types/Week';
import { convertServerTimeToWeek } from '../../common/utils/weekConverter';

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

const ScheduleTable = <T extends Pair>({
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
    <div className="relative m-3 grid grid-cols-1 gap-x-6 gap-y-2.5 pl-15 sm:grid-cols-2 sm:pl-25 lg:grid-cols-3 2xl:grid-cols-6">
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

export default ScheduleTable;
