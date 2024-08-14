import { Redirect, Route, Switch } from 'react-router-dom';
import ScheduleWrapper from '../scheduleWrapper';
import ExamsWrap from "../scheduleExams";
import { routes } from '../../common/constants/routes';
import { getScheduleByGroup, getScheduleByLecturer } from '../../api/schedule';

const ScheduleRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.GROUP}>
        <ScheduleWrapper contextType="group" getData={getScheduleByGroup}/>
      </Route>
      <Route exact path={routes.SESSION}>
        <ExamsWrap />
      </Route>
      <Route exact path={routes.LECTURER}>
        <ScheduleWrapper contextType="lecturer" getData={getScheduleByLecturer}/>
      </Route>
      <Route>
        <Redirect to={routes.GROUP}/>
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
