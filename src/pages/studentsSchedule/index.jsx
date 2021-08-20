import React, { useState } from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import { Schedule } from '../../components/schedule';
import { mockdata } from './mock';

export const StudentsSchedule = () => {
  const [weekNumber, setWeekNumber] = useState(1);
  return (
  <React.Fragment>
    <Header isTeachersSearch={false}/>
    <h3>students schedule page</h3>
    <Schedule 
      scheduleData={mockdata}
      group={mockdata.groupName}
      week={weekNumber}
    />

  </React.Fragment>
  );
};

export default StudentsSchedule;