import React from 'react';
import style from './style.scss';
import { ScheduleItem } from '../scheduleItem';

export const Schedule = ({scheduleData, isMobile}) => (
  <React.Fragment>
    //!TODO: make responsive schedule
    <ScheduleItem schedulItemData={scheduleData.monday[0]} />
    <div>!TODO: make a schedule grid</div>
    <button>I am another element</button>
  </React.Fragment>
);

export default Schedule;
