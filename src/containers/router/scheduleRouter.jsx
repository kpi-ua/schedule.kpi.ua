import { Route, Switch } from 'react-router-dom';
import { StudentsSchedule } from '../../pages/studentsSchedule';
import { SessionsSchedule } from '../../pages/sessionsSchedule';
import { TeachersSchedule } from '../../pages/teachersSchedule';
import { Page404 } from '../../pages/404';

const ScheduleRouter = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <StudentsSchedule/>
            </Route>
            <Route path='/sessions'>
                <SessionsSchedule/>
            </Route>
            <Route path='/teachers'>
                <TeachersSchedule/>
            </Route>
            <Route>
                <Page404/>
            </Route>
        </Switch>
    );
};

export default ScheduleRouter;
