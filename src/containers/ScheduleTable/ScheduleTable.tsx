import React from 'react';
import { generateScheduleMatrix } from '../../common/utils/generateScheduleMatrix';
import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import { ScheduleHeader } from '../ScheduleHeader';
import ScheduleRow from '../ScheduleRow';
import TimeDivider from '../../components/TimeDivider';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { media } from '../../common/styles/styles';
import { range } from 'lodash-es';
import styled from 'styled-components';
import { useCurrentTime } from '../../queries/useCurrentTime';
import { useSliceOptionsContext } from '../../common/context/SliceOptionsContext';
import { useWeekStore } from '../../store/weekStore';
import { ScheduleMatrix, ScheduleMatrixRow } from '../../types/ScheduleMatrix';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';
import { useTimeSlots } from '../../queries/useTimeSlots';

interface ScheduleWrapperProps<T extends Pair> extends ScheduleComponentsProps<T> {
  schedule?: Schedule<T>;
}

const weekValue: Record<string, string> = {
  firstWeek: 'scheduleFirstWeek',
  secondWeek: 'scheduleSecondWeek',
};

export const GridContainer = styled.div`
  margin: 0.75rem;
  padding-left: 100px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 10px;

  ${media.mediumMode} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.smallMode} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.extraSmallMode} {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 60px;
  }
`;

export const CurrentDayContainer = styled.div<{ $start: number }>`
  position: absolute;
  background: ${getValueFromTheme('currentDayContainer')};
  grid-column: ${(props) => props.$start} / span 1;
  width: calc(100% + 1.5rem);
  left: -0.75rem;
  top: -0.75rem;
  bottom: -0.75rem;
  z-index: 0;

  ${media.extraSmallMode} {
    top: 0px;
  }
`;

const ScheduleTable = <T extends Pair>({
  schedule,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleWrapperProps<T>) => {
  const { slice } = useSliceOptionsContext();
  const { currentWeek } = useWeekStore();
  const { data: currentTime } = useCurrentTime();
  const { data: timeSlots } = useTimeSlots();
  const [start, end] = slice;

  const currentDayColumn = range(start, end + 1).indexOf(currentTime?.currentDay || 0) + 1;

  const generateScheduleRows = (scheduleMatrix: ScheduleMatrix<T>, timeSlots: string[]) => {
    return scheduleMatrix.map((item: ScheduleMatrixRow<T>, i: number) => {
      const [start, end] = slice;
      const slicedDataset = item.slice(start - 1, end);

      if (i + 1 > timeSlots?.length) {
        return null;
      }

      return (
        <React.Fragment key={i}>
          <TimeDivider value={timeSlots[i]} />
          <ScheduleRow
            key={i}
            scheduleMatrixCell={slicedDataset}
            baseComponent={BaseComponent}
            baseComponentExtended={BaseComponentExtended}
          />
        </React.Fragment>
      );
    });
  };

  if (!timeSlots?.length || !currentTime) {
    return null;
  }

  const weekSchedule = schedule && currentWeek ? schedule[weekValue[currentWeek]] : [];

  const scheduleMatrix = generateScheduleMatrix<T>(weekSchedule, timeSlots, currentTime.currentLesson);

  return (
    <GridContainer>
      {currentDayColumn ? <CurrentDayContainer $start={currentDayColumn} /> : null}
      <ScheduleHeader />
      {generateScheduleRows(scheduleMatrix, timeSlots)}
    </GridContainer>
  );
};

export default ScheduleTable;
