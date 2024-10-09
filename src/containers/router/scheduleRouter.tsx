import { Redirect, Route, Switch } from 'react-router-dom';

import ExamsWrap from "../scheduleExams";
import GroupSchedule from '../GroupSchedule';
import LecturerSchedule from '../LecturerSchedule';
import { routes } from '../../common/constants/routes';

const ScheduleRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.GROUP}>
        <GroupSchedule />
      </Route>
      <Route exact path={routes.SESSION}>
        <ExamsWrap />
      </Route>
      <Route exact path={routes.LECTURER}>
        <LecturerSchedule />
      </Route>
      <Route>
        <Redirect to={routes.GROUP}/>
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
