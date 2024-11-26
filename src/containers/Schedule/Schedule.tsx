import { Redirect, Route, Switch } from 'react-router-dom';

import GroupSchedule from '../GroupSchedule';
import LastSyncDate from '../../components/LastSyncDate';
import LecturerSchedule from '../LecturerSchedule';
import ScheduleExams from '../scheduleExams';
import { ScheduleLayout } from '../../layouts/ScheduleLayout';
import { routes } from '../../common/constants/routes';

const Schedule = () => (
  <ScheduleLayout>
    <Switch>
      <Route exact path={routes.GROUP}>
        <GroupSchedule />
        <LastSyncDate />
      </Route>
      <Route exact path={routes.SESSION}>
        <ScheduleExams />
        <LastSyncDate />
      </Route>
      <Route exact path={routes.LECTURER}>
        <LecturerSchedule />
      </Route>
      <Route>
        <Redirect to={routes.GROUP} />
      </Route>
    </Switch>
  </ScheduleLayout>
);

export default Schedule;
