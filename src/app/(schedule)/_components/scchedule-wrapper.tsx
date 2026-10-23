import { DayToggle } from '@/components/day-toggle';
import { SliceContextProvider } from '@/lib/context/slice-options-context';
import { CurrentTime } from '@/models/CurrentTime';
import { Pair } from '@/models/Pair';
import { Schedule } from '@/models/Schedule';
import { ScheduleComponentsProps } from '@/types/ScheduleComponentsProps';

import { ScheduleTable } from './schedule-table';

interface ScheduleWrapperProps<T extends Pair> extends ScheduleComponentsProps<T> {
  schedule?: Schedule<T>;
  currentTime: CurrentTime;
  timeSlots: string[];
}

const ScheduleWrapper = <T extends Pair>({
  schedule,
  currentTime,
  timeSlots,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleWrapperProps<T>) => {
  return (
    <SliceContextProvider currentDay={currentTime.currentDay}>
      <DayToggle />
      <ScheduleTable
        schedule={schedule}
        currentTime={currentTime}
        timeSlots={timeSlots}
        baseComponent={BaseComponent}
        baseComponentExtended={BaseComponentExtended}
      />
    </SliceContextProvider>
  );
};

export default ScheduleWrapper;
