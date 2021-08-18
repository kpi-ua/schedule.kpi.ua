import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { StudentsSchedule } from './pages/studentsSchedule';
import { SessionsSchedule } from './pages/sessionsSchedule';
import { TeachersSchedule } from './pages/teachersSchedule';
import { Page404 } from './pages/404'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StudentsSchedule} />
        <Route path="/sessions" component={SessionsSchedule} />
        <Route path="/teachers" component={TeachersSchedule} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
