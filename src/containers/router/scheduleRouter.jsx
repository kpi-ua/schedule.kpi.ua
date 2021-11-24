import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ScheduleContainer from '../scheduleContainer';

import { getScheduleByGroup, getScheduleByLecturer } from '../../api/schedule';

const ScheduleRouter = () => {
  const getSchedule = {
    group: getScheduleByGroup,
    lecturer: getScheduleByLecturer,
    exam: getScheduleByLecturer,
  };

  return (
    <Switch>
      <Route exact path="/">
        <ScheduleContainer contextType='group' getData={getSchedule.group}/>
      </Route>
      <Route exact path="/sessions">
        <ScheduleContainer contextType='group' getData={getSchedule.exam}/>
      </Route>
      <Route exact path="/teachers">
        <ScheduleContainer contextType='lecturer' getData={getSchedule.lecturer}/>
      </Route>
      <Route>
        <Redirect to="/"/>
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
