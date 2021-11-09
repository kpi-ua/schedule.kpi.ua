import { Redirect, Route, Switch } from 'react-router-dom';
import ScheduleContainer from '../scheduleContainer';

import { mockdata } from '../../mock';

const ScheduleRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ScheduleContainer data={mockdata}/>
      </Route>
      <Route exact path="/sessions">
        <ScheduleContainer data={mockdata}/>
      </Route>
      <Route exact path="/teachers">
        <ScheduleContainer data={mockdata}/>
      </Route>
      <Route>
        <Redirect to="/"/>
      </Route>
    </Switch>
  );
};

export default ScheduleRouter;
