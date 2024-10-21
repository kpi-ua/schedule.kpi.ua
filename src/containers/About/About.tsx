import { Route, Switch } from 'react-router-dom';

import { AboutLayout } from '../../layouts/AboutLayout';
import { Contacts } from './Contacts';
import { Project } from './Project';
import { routes } from '../../common/constants/routes';

export const About = () => (
  <AboutLayout>
    <Switch>
      <Route exact path={routes.CONTACTS}>
        <Contacts />
      </Route>
      <Route>
        <Project />
      </Route>
    </Switch>
  </AboutLayout>
);
