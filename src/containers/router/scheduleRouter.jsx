import { Redirect, Route, Switch } from 'react-router-dom';
import ScheduleWrapper from '../scheduleWrapper';

import { routes } from '../../common/constants/routes';
import { getScheduleApiFunction } from '../../common/utils/getApiFunction';

const ScheduleRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.GROUP}>
        <ScheduleWrapper contextType="group" getData={getScheduleApiFunction(routes.GROUP)}/>
      </Route>
      <Route exact path={routes.SESSION}>
        <ScheduleWrapper contextType="group" getData={getScheduleApiFunction(routes.SESSION)}/>
      </Route>
      <Route exact path={routes.LECTURER}>
        <ScheduleWrapper contextType="lecturer" getData={getScheduleApiFunction(routes.LECTURER)}/>
      </Route>
      <Route>
        <Redirect to={routes.GROUP}/>
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
