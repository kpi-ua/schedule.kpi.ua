import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import ScheduleDayToggler from "../scheduleDayToggler";
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { SliceContextProvider } from "../../common/context/sliceOptionsContext";
import { useCurrentDateParams } from '../../common/hooks/useCurrentDateParams';

interface ScheduleWrapperProps<T extends Pair> {
  schedule?: Schedule<T>;
}

const ScheduleWrapper = <T extends Pair,>({ schedule }: ScheduleWrapperProps<T>) => {
  const { currentDay } = useCurrentDateParams();

  return (
    <SliceContextProvider initialDay={currentDay}>
      <ScheduleDayToggler />
      <ScheduleTable schedule={schedule} />
    </SliceContextProvider>
  );
};

export default ScheduleWrapper;
