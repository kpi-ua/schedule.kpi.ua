import React, { useState } from 'react';
import { Schedule } from '../../components/schedule';
import { mockdata } from './mock';

export const StudentsSchedule = () => {
  const [weekNumber, setWeekNumber] = useState(1);
  return (
  <React.Fragment>
    <Schedule
      scheduleData={mockdata}
      group={mockdata.groupName}
      week={weekNumber}
    />

  </React.Fragment>
  );
};

export default StudentsSchedule;
