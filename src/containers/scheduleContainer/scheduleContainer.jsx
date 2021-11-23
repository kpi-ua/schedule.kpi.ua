import { useState } from "react";
import ScheduleRow from "../scheduleRow";
import { GridWrapper } from "./scheduleContainer.style";
import SliceOptionsContext from "../../common/context/sliceOptionsContext";
import ScheduleDayToggler from "../scheduleDayToggler";
import Schedule from "../schedule";
import { generateScheduleMatrix } from "../../common/utils/generateScheduleMatrix";
import { useWeekContext } from "../../common/context/weekContext";
import { useEffect } from "react";

const ScheduleContainer = ({ data }) => {
  const { _, currentWeek } = useWeekContext();
  const [sliceParams, setSliceParams] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const lessonsSelected =
      currentWeek === "firstWeek"
        ? data.scheduleFirstWeek
        : data.scheduleSecondWeek;
    setLessons(lessonsSelected);
  }, [currentWeek]);

  const generateScheduleRows = (scheduleMatrix) => {
    return scheduleMatrix.map((item, i) => {
      const slicedDataset = sliceParams
        ? item.slice(sliceParams.start, sliceParams.end)
        : item;
      return <ScheduleRow key={i} dataset={slicedDataset} />;
    });
  };

  const setSlice = (value) => {
    if (!value) {
      setSliceParams(null);
      return;
    }

    const ranges = value.split("-");
    setSliceParams({ start: +ranges[0], end: +ranges[1] });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <GridWrapper>
        <SliceOptionsContext value={sliceParams}>
          <ScheduleDayToggler initialValue={"mon"} handler={setSlice} />
          <Schedule>
            {generateScheduleRows(generateScheduleMatrix(lessons))}
          </Schedule>
        </SliceOptionsContext>
      </GridWrapper>
    </div>
  );
};

export default ScheduleContainer;
