import { useEffect, useState } from "react";
import ScheduleRow from "../scheduleRow";
import { GridWrapper } from "./scheduleWrapper.style";
import SliceOptionsContext from "../../common/context/sliceOptionsContext";
import ScheduleDayToggler from "../scheduleDayToggler";
import Schedule from "../schedule";
import { generateScheduleMatrix } from "../../common/utils/generateScheduleMatrix";
import { useWeekContext } from "../../common/context/weekContext";
import { useLecturerContext } from "../../common/context/lecturerContext";
import { useGroupContext } from "../../common/context/groupContext";

const ScheduleWrapper = ({
  getData,
  contextType,
}: {
  getData: any;
  contextType: any;
}) => {
  const [sliceParams, setSliceParams] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [data, setData] = useState(null);

  const { currentWeek } = useWeekContext();
  const { lecturer } = useLecturerContext();
  const { group } = useGroupContext();

  const weekValue: Record<string, string>= {
    firstWeek: "scheduleFirstWeek",
    secondWeek: "scheduleSecondWeek",
  };

  useEffect(() => {
    const contextValue = contextType === "lecturer" ? lecturer : group?.id;

    if (contextValue) {
      getData(contextValue).then((res: any) => setData(res.data));
    } else {
      setData(null);
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
      setSliceParams(null);
      return;
    }

    const ranges = value.split("-");
    setSliceParams({ start: +ranges[0], end: +ranges[1] });
  };

  return (
    data && (
      <div style={{ overflow: "hidden" }}>
        <GridWrapper>
          <SliceOptionsContext value={sliceParams}>
            <ScheduleDayToggler handler={setSlice} />
            <Schedule>
              {generateScheduleRows(
                generateScheduleMatrix(data[weekValue[currentWeek]])
              )}
            </Schedule>
          </SliceOptionsContext>
        </GridWrapper>
      </div>
    )
  );
};

export default ScheduleWrapper;
