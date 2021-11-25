import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ScheduleContainer from '../scheduleContainer';

import { getScheduleByGroup, getScheduleByLecturer } from '../../api/schedule';
import { routes } from '../../common/constants/routes';
import { getScheduleApiFunction } from '../../common/utils/getApiFunction';

const ScheduleRouter = () => {
  const getSchedule = {
    group: getScheduleByGroup,
    lecturer: getScheduleByLecturer,
    exam: getScheduleByLecturer,
  };

  return (
    <Switch>
      <Route exact path={routes.GROUP}>
        <ScheduleContainer contextType='group' getData={getScheduleApiFunction(routes.GROUP)}/>
      </Route>
      <Route exact path={routes.SESSION}>
        <ScheduleContainer contextType='group' getData={getScheduleApiFunction(routes.SESSION)}/>
      </Route>
      <Route exact path={routes.LECTURER}>
        <ScheduleContainer contextType='lecturer' getData={getScheduleApiFunction(routes.LECTURER)}/>
      </Route>
      <Route>
        <Redirect to={routes.GROUP}/>
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
