import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ScheduleTypeTabs from 'containers/scheduleTypeTabs';
import EntitySearch from 'components/entitySearch';
import WeekSwitch from 'components/weekSwitch';
import { MainSettingsContainer } from './mainSettings.style';

const MainSettings = () => {
  const {pathname} = useLocation();
  const [weekAvailable, setWeekAvailable] = useState(true);

  useEffect(() => {
    if (pathname.includes('sessions')) {
      setWeekAvailable(false);
    } else {
      setWeekAvailable(true);
    }
  }, [pathname]);

  return (
    <MainSettingsContainer
      flexDirection="column"
      alignItems="center"
      gap="24px"
    >
      <ScheduleTypeTabs/>
      <EntitySearch/>
      <div className={'switch-container'}>
        <WeekSwitch type={weekAvailable ? 'weeks' : 'semesters'}></WeekSwitch>
      </div>
    </MainSettingsContainer>
  );
};

export default MainSettings;
