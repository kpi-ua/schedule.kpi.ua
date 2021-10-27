import React, {useState} from 'react';
import Schedule from '../../containers/schedule';
import {WeekSwitch} from '../../components/weekSwitch';
import ScheduleRow from "../../containers/scheduleRow";
import {GridWrapper} from "../../containers/schedule/schedule.style";
import ScheduleDayToggler from "../../containers/scheduleDayToggler/scheduleDayToggler";

export const StudentsSchedule = () => {
  const [week, setWeek] = useState('first');
  const changeWeek = () => setWeek(week === 'first' ? 'second' : 'first');
  return (
      <div style={{overflow: 'hidden'}}>
        <WeekSwitch week={week} setWeek={changeWeek}/>
        <GridWrapper>
          <ScheduleDayToggler initialValue={'mon'} handler={(value) => console.log(value)}/>
          <Schedule>
            <ScheduleRow order={1}/>
            <ScheduleRow order={2}/>
            <ScheduleRow order={3}/>
          </Schedule>
        </GridWrapper>
      </div>
  );
};

export default StudentsSchedule;
