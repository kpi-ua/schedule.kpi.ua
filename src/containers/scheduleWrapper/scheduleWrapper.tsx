import { GridWrapper } from "./scheduleWrapper.style";
import { SliceContextProvider } from "../../common/context/sliceOptionsContext";
import ScheduleDayToggler from "../scheduleDayToggler";
import Schedule from "../schedule";
import { PagedResponse } from '../../models/PagedResponse';
import { useCurrentDateParams } from '../../common/hooks/useCurrentDateParams';
import ScheduleTable from '../ScheduleTable/ScheduleTable';

interface ScheduleWrapperProps<T> {
  getData: (id: string) => Promise<PagedResponse<T[]>>;
  contextType: string;
}

const ScheduleWrapper = <T,>({
  getData,
  contextType,
}: ScheduleWrapperProps<T>) => {
  const { currentDay } = useCurrentDateParams();

  return (
    <GridWrapper>
      <SliceContextProvider initialDay={currentDay}>
        <ScheduleDayToggler />
        <Schedule>
          <ScheduleTable getData={getData} contextType={contextType} />
        </Schedule>
      </SliceContextProvider>
    </GridWrapper>
  );
};

export default ScheduleWrapper;
