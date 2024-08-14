import { useEffect, useState } from "react";
import ScheduleRow from "../scheduleRow";
import { GridWrapper } from "./scheduleWrapper.style";
import SliceOptionsContext, { Slice } from "../../common/context/sliceOptionsContext";
import ScheduleDayToggler from "../scheduleDayToggler";
import Schedule from "../schedule";
import { generateScheduleMatrix } from "../../common/utils/generateScheduleMatrix";
import { useWeekContext } from "../../common/context/weekContext";
import { useLecturerContext } from "../../common/context/lecturerContext";
import { useGroupContext } from "../../common/context/groupContext";
import { PagedResponse } from '../../models/PagedResponse';

interface ScheduleWrapperProps<T> {
  getData: (id: string) => Promise<PagedResponse<T[]>>;
  contextType: string;
}

const ScheduleWrapper = <T,>({
  getData,
  contextType,
}: ScheduleWrapperProps<T>) => {
  const [sliceParams, setSliceParams] = useState<Slice>({});
  const [data, setData] = useState<T[]>();

  const { currentWeek } = useWeekContext();
  const { lecturer } = useLecturerContext();
  const { group } = useGroupContext();

  const weekValue: Record<string, string>= {
    firstWeek: "scheduleFirstWeek",
    secondWeek: "scheduleSecondWeek",
  };

  useEffect(() => {
    const contextValue = contextType === "lecturer" ? lecturer?.id : group?.id;

    if (contextValue) {
      getData(contextValue).then((res: any) => setData(res.data));
    } else {
      setData(undefined);
    }
  }, [lecturer, group, contextType, getData]);

  const generateScheduleRows = (scheduleMatrix: any[]) => {
    return scheduleMatrix.map((item: any, i: number) => {
      const slicedDataset = sliceParams
        ? item.slice(sliceParams.start, sliceParams.end)
        : item;
      return <ScheduleRow key={i} dataset={slicedDataset} />;
    });
  };

  const setSlice = (value: string) => {
    if (!value) {
      setSliceParams({});
      return;
    }

    const ranges = value.split("-");
    setSliceParams({ start: +ranges[0], end: +ranges[1] });
  };

  if (!data) {
    return null;
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <GridWrapper>
        <SliceOptionsContext value={sliceParams}>
          <ScheduleDayToggler onChange={setSlice} />
          <Schedule>
            {generateScheduleRows(
              generateScheduleMatrix(data[weekValue[currentWeek]])
            )}
          </Schedule>
        </SliceOptionsContext>
      </GridWrapper>
    </div>
  );
};

export default ScheduleWrapper;
