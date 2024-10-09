import { FiltersContainer, MainSettingsContainer } from "./mainSettings.style";
import { Route, Switch } from "react-router-dom";

import GroupSearch from '../../components/GroupSearch';
import LecturerSearch from '../../components/LecturerSearch';
import ScheduleTypeTabs from "../scheduleTypeTabs";
import WeekSwitch from "../../components/weekSwitch";
import { routes } from '../../common/constants/routes';

const MainSettings = () => (
  <MainSettingsContainer
    flexDirection="column"
    alignItems="center"
    gap="24px"
  >
    <ScheduleTypeTabs />
    <FiltersContainer>
      <Switch>
        <Route exact path={routes.LECTURER}>
          <LecturerSearch />
          <WeekSwitch type="weeks" />
        </Route>
        <Route exact path={routes.GROUP}>
          <GroupSearch />
          <WeekSwitch type="weeks" />
        </Route>
        <Route exact path={routes.SESSION}>
          <GroupSearch />
          <WeekSwitch type="semesters" />
        </Route>
      </Switch>
    </FiltersContainer>
  </MainSettingsContainer>
);

export default MainSettings;
