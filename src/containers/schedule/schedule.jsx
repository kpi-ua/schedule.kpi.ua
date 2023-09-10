import React from 'react';
import TimeDivider from '../../components/timeDivider';
import { CurrentDayContainer, GridContainer } from './schedule.style';
import ScheduleHeader from '../scheduleHeader';
import { TIME_POINTS } from '../../common/constants/scheduleParams';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import { useCurrentDateParams } from '../../common/utils/useCurrentDateParams';

const Schedule = ({children}) => {
  const sliceOptions = useSliceOptionsContext();
  const { currentDay } = useCurrentDateParams();

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
      return currentDay >= sliceOptions.start && (currentDay - 1) < sliceOptions.end;
    }

    return true;
  };

  const gridDayStart = currentDay;

  return (
    <GridContainer>
      {gridDayStart > 0 && isDayInSlice() ? <CurrentDayContainer start={sliceOptions ? gridDayStart - sliceOptions.start : gridDayStart}/> : null}
      <ScheduleHeader/>
      {dynamicGeneratedTable}
    </GridContainer>
  );
};

export default Schedule;