import { Redirect, Route, Switch } from 'react-router-dom';

import ExamsWrap from "../scheduleExams";
import GroupSchedule from '../GroupSchedule';
import LastSyncDate from '../../components/LastSyncDate';
import LecturerSchedule from '../LecturerSchedule';
import { media } from '../../common/styles/styles';
import { routes } from '../../common/constants/routes';
import styled from 'styled-components';

const Container = styled.div`
  margin: 36px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${media.extraSmallMode} {
    margin: 16px;
  }
`;

const ScheduleRouter = () => {
  return (
    <Container>
      <Switch>
        <Route exact path={routes.GROUP}>
          <GroupSchedule />
          <LastSyncDate />
        </Route>
        <Route exact path={routes.SESSION}>
          <ExamsWrap />
          <LastSyncDate />
        </Route>
        <Route exact path={routes.LECTURER}>
          <LecturerSchedule />
        </Route>
        <Route>
          <Redirect to={routes.GROUP}/>
        </Route>
      </Switch>
    </Container>
  );
};

export default ScheduleRouter;
