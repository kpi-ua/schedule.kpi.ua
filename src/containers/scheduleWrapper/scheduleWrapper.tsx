import { useEffect, useState } from "react";
import { GridWrapper } from "./scheduleWrapper.style";
import { SliceContextProvider } from "../../common/context/sliceOptionsContext";
import ScheduleDayToggler from "../scheduleDayToggler";
import Schedule from "../schedule";
import { useLecturerContext } from "../../common/context/lecturerContext";
import { useGroupContext } from "../../common/context/groupContext";
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
  const [data, setData] = useState<T[]>();
  const { currentDay } = useCurrentDateParams()
  const { lecturer } = useLecturerContext();
  const { group } = useGroupContext();

  useEffect(() => {
    const contextValue = contextType === "lecturer" ? lecturer?.id : group?.id;

    if (contextValue) {
      getData(contextValue).then(res => setData(res.data));
    } else {
      setData(undefined);
    }
  }, [lecturer, group, contextType, getData]);

  if (!data) {
    return null;
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <GridWrapper>
        <SliceContextProvider initialDay={currentDay}>
          <ScheduleDayToggler />
          <Schedule>
            <ScheduleTable data={data} />
          </Schedule>
        </SliceContextProvider>
      </GridWrapper>
    </div>
  );
};

export default ScheduleWrapper;
