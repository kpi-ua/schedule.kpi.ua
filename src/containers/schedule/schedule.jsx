import React from 'react';
import TimeDivider from '../../components/timeDivider';
import { CurrentDayContainer, GridContainer } from './schedule.style';
import ScheduleHeader from '../scheduleHeader';
import { TIME_POINTS } from '../../common/constants/scheduleParams';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import { useCurrentWeekDay } from '../../common/utils/useCurrentWeekDay';

const Schedule = ({children}) => {
  const sliceOptions = useSliceOptionsContext();
  const currentWeekDay = useCurrentWeekDay();

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