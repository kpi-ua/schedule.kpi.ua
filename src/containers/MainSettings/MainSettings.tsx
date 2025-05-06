import { Route, Routes } from 'react-router-dom';
import { FiltersContainer, MainSettingsContainer } from './MainSettings.style';
import GroupSearch from '../../components/GroupSearch';
import LecturerSearch from '../../components/LecturerSearch';
import ScheduleTypeTabs from '../ScheduleTypeTabs';
import WeekSwitch from '../../components/WeekSwitch';
import { routes } from '../../common/constants/routes';

const MainSettings = () => {
  return (
    <MainSettingsContainer $flexDirection="column" $alignItems="center" $gap="24px">
      <ScheduleTypeTabs />
      <FiltersContainer>
        <Routes>
          <Route
            index
            element={
              <>
                <GroupSearch />
                <WeekSwitch />
              </>
            }
          />
          <Route path={routes.SESSION} element={<GroupSearch />} />
          <Route
            path={routes.LECTURER}
            element={
              <>
                <LecturerSearch />
                <WeekSwitch />
              </>
            }
          />
        </Routes>
      </FiltersContainer>
    </MainSettingsContainer>
  );
};

export default MainSettings;
