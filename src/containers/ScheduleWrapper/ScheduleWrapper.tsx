import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import { CurrentTime } from '../../models/CurrentTime';
import ScheduleDayToggler from '../ScheduleDayToggler';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { SliceContextProvider } from '../../common/context/SliceOptionsContext';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';
import { cn } from '../../common/utils/cn';

export const ScheduleGrid = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn(
      'relative flex grow flex-col gap-4 overflow-hidden rounded-[20px] border-2 border-neutral-100 bg-bg-table',
      className,
    )}
    {...props}
  />
);

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
      <ScheduleDayToggler />
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
