import React from 'react';
import { generateScheduleMatrix } from '../../common/utils/generateScheduleMatrix';
import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import { ScheduleHeader } from '../ScheduleHeader';
import ScheduleRow from '../ScheduleRow';
import TimeDivider from '../../components/TimeDivider';
import { range } from 'lodash-es';
import { useCurrentTime } from '../../queries/useCurrentTime';
import { useSliceOptionsContext } from '../../common/context/SliceOptionsContext';
import { useWeekStore } from '../../store/weekStore';
import { ScheduleMatrix, ScheduleMatrixRow } from '../../types/ScheduleMatrix';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';
import { useTimeSlots } from '../../queries/useTimeSlots';
import { convertServerTimeToWeek } from '../../common/utils/weekConverter';

interface ScheduleWrapperProps<T extends Pair> extends ScheduleComponentsProps<T> {
  schedule?: Schedule<T>;
}

const weekValue: Record<string, string> = {
  firstWeek: 'scheduleFirstWeek',
  secondWeek: 'scheduleSecondWeek',
};

const ScheduleTable = <T extends Pair>({
  schedule,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleWrapperProps<T>) => {
  const { slice } = useSliceOptionsContext();
  const { currentWeek } = useWeekStore();
  const { data: currentTime } = useCurrentTime();
  const { data: timeSlots } = useTimeSlots();
  const [start, end] = slice;

  const isCurrentWeekSelected = convertServerTimeToWeek(currentTime?.currentWeek) === currentWeek;
  const currentDayColumn = isCurrentWeekSelected
    ? range(start, end + 1).indexOf(currentTime?.currentDay || 0) + 1
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

  if (!timeSlots?.length || !currentTime) {
    return null;
  }

  const weekSchedule = schedule && currentWeek ? schedule[weekValue[currentWeek]] : [];

  const scheduleMatrix = generateScheduleMatrix<T>(
    weekSchedule,
    timeSlots,
    isCurrentWeekSelected ? currentTime.currentLesson : undefined,
  );

  return (
    <div className="relative m-3 grid grid-cols-1 gap-x-6 gap-y-2.5 pl-[60px] xs:grid-cols-2 xs:pl-[100px] min-[989px]:grid-cols-3 min-[1441px]:grid-cols-6">
      {currentDayColumn ? (
        <div
          className="absolute top-0 -bottom-3 -left-3 z-0 w-[calc(100%+1.5rem)] bg-current-day xs:-top-3"
          style={{ gridColumn: `${currentDayColumn} / span 1` }}
        />
      ) : null}
      <ScheduleHeader />
      {generateScheduleRows(scheduleMatrix, timeSlots)}
    </div>
  );
};

export default ScheduleTable;
