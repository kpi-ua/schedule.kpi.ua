import React, { useState } from 'react';
import Schedule from '../../containers/schedule';
import { mockdata } from './mock';

export const StudentsSchedule = () => {
  const [weekNumber, setWeekNumber] = useState(1);
  return (
    <>
      <Schedule
        scheduleData={mockdata}
        group={mockdata.groupName}
        week={weekNumber}
      />
    </>
  );
};

export default StudentsSchedule;
