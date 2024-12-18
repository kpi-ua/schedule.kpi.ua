import { useLocation } from 'react-router-dom';
import { FiltersContainer, MainSettingsContainer } from './mainSettings.style';
import GroupSearch from '../../components/GroupSearch';
import LecturerSearch from '../../components/LecturerSearch';
import ScheduleTypeTabs from '../scheduleTypeTabs';
import WeekSwitch from '../../components/weekSwitch';
import { routes } from '../../common/constants/routes';

const MainSettings = () => {
  const { pathname } = useLocation();

  const renderFilters = () => {
    switch (pathname) {
      case routes.LECTURER:
        return (
          <>
            <LecturerSearch />
            <WeekSwitch type="weeks" />
          </>
        );
      case routes.GROUP:
        return (
          <>
            <GroupSearch />
            <WeekSwitch type="weeks" />
          </>
        );
      case routes.SESSION:
        return (
          <>
            <GroupSearch />
            <WeekSwitch type="semesters" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <MainSettingsContainer flexDirection="column" alignItems="center" gap="24px">
      <ScheduleTypeTabs />
      <FiltersContainer>{renderFilters()}</FiltersContainer>
    </MainSettingsContainer>
  );
};

export default MainSettings;
