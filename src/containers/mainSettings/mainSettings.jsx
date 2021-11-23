import ScheduleTypeTabs from '../scheduleTypeTabs';
import EntitySearch from '../../components/entitySearch';
import WeekSwitch from '../../components/weekSwitch';
import { MainSettingsContainer } from './mainSettings.style';

const MainSettings = () => {
  return (
    <MainSettingsContainer flexDirection="column" alignItems="center" gap="24px">
      <ScheduleTypeTabs/>
      <EntitySearch/>
      <div style={{width: '100%'}}>
        <WeekSwitch/>
      </div>
    </MainSettingsContainer>
  );
};

export default MainSettings;
