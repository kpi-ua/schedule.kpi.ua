import ScheduleItem from '../../components/scheduleItem';
import React from 'react';
import { ScheduleGrid, SchedulePaper } from './scheduleColumn.style';

const ScheduleColumn = () => (
  <div>
    <ScheduleGrid item>
      <SchedulePaper>
        <ScheduleItem/>
      </SchedulePaper>
    </ScheduleGrid>
    <ScheduleGrid item>
      <SchedulePaper>
        <ScheduleItem/>
      </SchedulePaper>
    </ScheduleGrid>
  </div>
);

export default ScheduleColumn;
