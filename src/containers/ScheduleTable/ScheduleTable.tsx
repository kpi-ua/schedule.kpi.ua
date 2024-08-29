import ScheduleRow from "../scheduleRow";
import { ScheduleMatrix, ScheduleMatrixRow, generateScheduleMatrix } from "../../common/utils/generateScheduleMatrix";
import { useWeekContext } from "../../common/context/weekContext";
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';

interface ScheduleWrapperProps<T> {
  data: T[];
}

const weekValue: Record<string, string> = {
  firstWeek: "scheduleFirstWeek",
  secondWeek: "scheduleSecondWeek",
};

const ScheduleTable = <T,>({ data }: ScheduleWrapperProps<T>) => {
  const { slice } = useSliceOptionsContext();
  const { currentWeek } = useWeekContext();

  const generateScheduleRows = (scheduleMatrix: ScheduleMatrix) => {
    return scheduleMatrix.map((item: ScheduleMatrixRow, i: number) => {
      const [start, end] = slice;
      const slicedDataset = item.slice(start - 1, end);
      return <ScheduleRow key={i} scheduleMatrixCell={slicedDataset} />;
    });
  };

  if (!data) {
    return null;
  }

  return (
    <>
      {generateScheduleRows(generateScheduleMatrix(data[weekValue[currentWeek]]))}
    </>
  );
};

export default ScheduleTable;
