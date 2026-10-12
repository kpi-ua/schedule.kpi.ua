import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import { CurrentTime } from '../../models/CurrentTime';
import ScheduleDayToggler from '../ScheduleDayToggler';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { SliceContextProvider } from '../../common/context/SliceOptionsContext';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';

export { ScheduleGrid } from './ScheduleGrid';

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
