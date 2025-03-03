import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import ScheduleDayToggler from '../ScheduleDayToggler';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { SliceContextProvider } from '../../common/context/sliceOptionsContext';

interface ScheduleWrapperProps<T extends Pair> {
  schedule?: Schedule<T>;
}

const ScheduleWrapper = <T extends Pair>({ schedule }: ScheduleWrapperProps<T>) => {
  return (
    <SliceContextProvider>
      <ScheduleDayToggler />
      <ScheduleTable schedule={schedule} />
    </SliceContextProvider>
  );
};

export default ScheduleWrapper;
