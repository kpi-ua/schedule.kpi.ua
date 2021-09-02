import ScheduleItem from '../../components/scheduleItem';
import React from 'react';
import { ScheduleGrid, SchedulePaper } from './scheduleColumn.style';

const ScheduleColumn = ({dayData}) => {
  return (
    <div>
      <ScheduleGrid item>
        {dayData && 
        <SchedulePaper isPresent={dayData.pairs.some(obj => obj.time === '08:30')}>
          <ScheduleItem scheduleItemData={dayData.pairs.find(obj => obj.time === '08:30')}/>
        </SchedulePaper> }
      </ScheduleGrid>
      <ScheduleGrid item>
        {dayData && 
        <SchedulePaper isPresent={dayData.pairs.some(obj => obj.time === '10:25')}>
          <ScheduleItem scheduleItemData={dayData.pairs.find(obj => obj.time === '10:25')}/>
        </SchedulePaper> }
      </ScheduleGrid>
      <ScheduleGrid item>
        {dayData && 
        <SchedulePaper isPresent={dayData.pairs.some(obj => obj.time === '12:20')}>
          <ScheduleItem scheduleItemData={dayData.pairs.find(obj => obj.time === '12:20')}/>
        </SchedulePaper> }
      </ScheduleGrid>
      <ScheduleGrid item>
        {dayData && 
        <SchedulePaper isPresent={dayData.pairs.some(obj => obj.time === '14:15')}>
          <ScheduleItem scheduleItemData={dayData.pairs.find(obj => obj.time === '14:15')}/>
        </SchedulePaper> }
      </ScheduleGrid>
      <ScheduleGrid item>
        {dayData && 
        <SchedulePaper isPresent={dayData.pairs.some(obj => obj.time === '16:10')}>
          <ScheduleItem scheduleItemData={dayData.pairs.find(obj => obj.time === '16:10')}/>
        </SchedulePaper> }
      </ScheduleGrid>
      <ScheduleGrid item>
        {dayData && 
        <SchedulePaper isPresent={dayData.pairs.some(obj => obj.time === '18:30')}>
          <ScheduleItem scheduleItemData={dayData.pairs.find(obj => obj.time === '18:30')}/>
        </SchedulePaper> }
      </ScheduleGrid>
    </div>
  );
};
export default ScheduleColumn;
