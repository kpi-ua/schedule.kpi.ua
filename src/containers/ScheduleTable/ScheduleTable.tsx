import React, { useEffect, useState } from 'react';
import ScheduleRow from "../scheduleRow";
import { ScheduleMatrix, ScheduleMatrixRow, generateScheduleMatrix } from "../../common/utils/generateScheduleMatrix";
import { useWeekContext } from "../../common/context/weekContext";
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import TimeDivider from '../../components/timeDivider';
import { TIME_POINTS } from '../../common/constants/scheduleParams';
import { useLecturerContext } from '../../common/context/lecturerContext';
import { useGroupContext } from '../../common/context/groupContext';
import { PagedResponse } from '../../models/PagedResponse';

interface ScheduleWrapperProps<T> {
  getData: (id: string) => Promise<PagedResponse<T[]>>;
  contextType: string;
}

const weekValue: Record<string, string> = {
  firstWeek: "scheduleFirstWeek",
  secondWeek: "scheduleSecondWeek",
};

const ScheduleTable = <T,>({ getData, contextType }: ScheduleWrapperProps<T>) => {
  const { slice } = useSliceOptionsContext();
  const { currentWeek } = useWeekContext();

  const [data, setData] = useState<T[]>();
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

  const generateScheduleRows = (scheduleMatrix: ScheduleMatrix) => {
    return scheduleMatrix.map((item: ScheduleMatrixRow, i: number) => {
      const [start, end] = slice;
      const slicedDataset = item.slice(start - 1, end);

      return (
        <React.Fragment key={i}>
          <TimeDivider value={TIME_POINTS[i]} />
          <ScheduleRow key={i} scheduleMatrixCell={slicedDataset} />
        </React.Fragment>
      );
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
