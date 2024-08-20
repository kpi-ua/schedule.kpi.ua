import React from 'react';
import TimeDivider from '../../components/timeDivider';
import { CurrentDayContainer, GridContainer } from './schedule.style';
import ScheduleHeader from '../scheduleHeader';
import { TIME_POINTS } from '../../common/constants/scheduleParams';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import { useCurrentDateParams } from '../../common/utils/useCurrentDateParams';

interface ScheduleProps {
  children: React.ReactNode;
}

const Schedule = ({ children }: ScheduleProps) => {
  const sliceOptions = useSliceOptionsContext();
  const { currentDay } = useCurrentDateParams();

  const dynamicGeneratedTable = React.Children.map(children, (child, index) => (
    <>
      <TimeDivider>{TIME_POINTS[index]}</TimeDivider>
      {child}
    </>
  ));

  const isDayInSlice = () => {
    if (sliceOptions.start && sliceOptions.end && currentDay) {
      return currentDay >= sliceOptions.start && currentDay < sliceOptions.end;
    }

    return true;
  };

  const gridDayStart = currentDay || 0 + 1;

  return (
    <GridContainer>
      {gridDayStart > 0 && isDayInSlice() ? <CurrentDayContainer start={sliceOptions.start ? gridDayStart - sliceOptions.start : gridDayStart}/> : null}
      <ScheduleHeader/>
      {dynamicGeneratedTable}
    </GridContainer>
  );
};

export default Schedule;
