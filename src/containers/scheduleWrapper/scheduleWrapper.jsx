import { useEffect, useState } from 'react';

import { generateScheduleMatrix } from 'common/utils/generateScheduleMatrix';
import { useWeekContext } from 'common/context/weekContext';
import { useLecturerContext } from 'common/context/lecturerContext';
import { useGroupContext } from 'common/context/groupContext';
import SliceOptionsContext from 'common/context/sliceOptionsContext';

import ScheduleRow from 'containers/scheduleRow';
import { GridWrapper } from './scheduleWrapper.style';
import ScheduleDayToggler from '../scheduleDayToggler';
import Schedule from 'containers/schedule';

const ScheduleWrapper = ({getData, contextType}) => {
  const [sliceParams, setSliceParams] = useState(null);
  const [data, setData] = useState(null);

  const {currentWeek} = useWeekContext();
  const {lecturer} = useLecturerContext();
  const {group} = useGroupContext();

  const weekValue = {
    firstWeek: 'scheduleFirstWeek',
    secondWeek: 'scheduleSecondWeek'
  };

  useEffect(() => {
    const contextValue = contextType === 'lecturer' ? lecturer : group?.id;

    if (contextValue) {
      getData(contextValue)
        .then(res => setData(res.data));
    } else {
      setData(null);
    }
  }, [lecturer, group, contextType, getData]);

  const generateScheduleRows = (scheduleMatrix) => {
    return scheduleMatrix.map((item, i) => {
      const slicedDataset = sliceParams
        ? item.slice(sliceParams.start, sliceParams.end)
        : item;
      return <ScheduleRow key={i} dataset={slicedDataset}/>;
    });
  };

  const setSlice = (value) => {
    if (!value) {
      setSliceParams(null);
      return;
    }

    const ranges = value.split('-');
    setSliceParams({start: +ranges[0], end: +ranges[1]});
  };

  return (
    data &&
    <div style={{overflow: 'hidden'}}>
      <GridWrapper>
        <SliceOptionsContext value={sliceParams}>
          <ScheduleDayToggler initialValue={'mon'} handler={setSlice}/>
          <Schedule>
            {generateScheduleRows(generateScheduleMatrix(data[weekValue[currentWeek]]))}
          </Schedule>
        </SliceOptionsContext>
      </GridWrapper>
    </div>
  );
};

export default ScheduleWrapper;
