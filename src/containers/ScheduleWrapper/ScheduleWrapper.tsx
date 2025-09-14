import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import ScheduleDayToggler from '../ScheduleDayToggler';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { SliceContextProvider } from '../../common/context/SliceOptionsContext';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';

interface ScheduleWrapperProps<T extends Pair> extends ScheduleComponentsProps<T> {
  schedule?: Schedule<T>;
}

const ScheduleWrapper = <T extends Pair>({
  schedule,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleWrapperProps<T>) => {
  return (
    <SliceContextProvider>
      <ScheduleDayToggler />
      <ScheduleTable schedule={schedule} baseComponent={BaseComponent} baseComponentExtended={BaseComponentExtended} />
    </SliceContextProvider>
  );
};

export default ScheduleWrapper;
