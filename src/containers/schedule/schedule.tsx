import React from 'react';
import { range } from 'lodash-es';
import TimeDivider from '../../components/timeDivider';
import { CurrentDayContainer, GridContainer } from './schedule.style';
import { ScheduleHeader } from '../ScheduleHeader';
import { TIME_POINTS } from '../../common/constants/scheduleParams';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import { useCurrentDateParams } from '../../common/hooks/useCurrentDateParams';

interface ScheduleProps {
  children: React.ReactNode;
}

const Schedule = ({ children }: ScheduleProps) => {
  const { slice } = useSliceOptionsContext();
  const { currentDay } = useCurrentDateParams();

  const dynamicGeneratedTable = React.Children.map(children, (child, index) => (
    <>
      <TimeDivider>{TIME_POINTS[index]}</TimeDivider>
      {child}
    </>
  ));

  const [start, end] = slice;

  const currentDayColumn =
    range(start, end + 1)
    .indexOf(currentDay) + 1;

  return (
    <GridContainer>
      {currentDayColumn ? <CurrentDayContainer start={currentDayColumn}/> : null}
      <ScheduleHeader/>
      {dynamicGeneratedTable}
    </GridContainer>
  );
};

export default Schedule;
