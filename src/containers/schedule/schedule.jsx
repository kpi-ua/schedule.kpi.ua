import React, { useEffect, useState } from 'react';
import TimeDivider from '../../components/timeDivider';
import { CurrentDayContainer, GridContainer } from './schedule.style';
import ScheduleHeader from '../scheduleHeader';
import { TIME_POINTS } from '../../common/constants/scheduleParams';
import moment from 'moment';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';

const Schedule = ({children}) => {
  const [currentWeekDay, setCurrentWeekDay] = useState(null);
  const sliceOptions = useSliceOptionsContext();
  useEffect(() => {
    const day = moment().day();

    if (day) {
      setCurrentWeekDay(day - 1);
    }
  }, []);

  const dynamicGeneratedTable = React.Children.map(children, (child, index) => {
    return (
      <>
        <TimeDivider>{TIME_POINTS[index]}</TimeDivider>
        {child}
      </>
    );
  });

  const isDayInSlice = () => {
    if (sliceOptions) {
      return currentWeekDay >= sliceOptions.start && currentWeekDay < sliceOptions.end;
    }

    return true;
  };

  const gridDayStart = currentWeekDay + 1;

  return (
    <GridContainer>
      {gridDayStart > 0 && isDayInSlice() ? <CurrentDayContainer start={sliceOptions ? gridDayStart - sliceOptions.start : gridDayStart}/> : null}
      <ScheduleHeader/>
      {dynamicGeneratedTable}
    </GridContainer>
  );
};

export default Schedule;