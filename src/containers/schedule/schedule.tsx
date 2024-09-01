import React from 'react';
import { range } from 'lodash-es';
import { CurrentDayContainer, GridContainer } from './schedule.style';
import { ScheduleHeader } from '../ScheduleHeader';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import { useCurrentDateParams } from '../../common/hooks/useCurrentDateParams';

interface ScheduleProps {
  children: React.ReactNode;
}

const Schedule = ({ children }: ScheduleProps) => {
  const { slice } = useSliceOptionsContext();
  const { currentDay } = useCurrentDateParams();
  const [start, end] = slice;

  const currentDayColumn =
    range(start, end + 1)
    .indexOf(currentDay) + 1;

  return (
    <GridContainer>
      {currentDayColumn ? <CurrentDayContainer start={currentDayColumn}/> : null}
      <ScheduleHeader/>
      {children}
    </GridContainer>
  );
};

export default Schedule;
