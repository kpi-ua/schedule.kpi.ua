import ScheduleTypeTabs from '../scheduleTypeTabs';
import GroupSearch from '../../components/groupSearch';
import WeekSwitch from '../../components/weekSwitch';
import { MainSettingsContainer } from './mainSettings.style';

const MainSettings = () => {
  return (
    <MainSettingsContainer flexDirection="column" alignItems="center" gap="24px">
      <ScheduleTypeTabs/>
      <GroupSearch/>
      <div style={{width: '100%'}}>
        <WeekSwitch/>
      </div>
    </MainSettingsContainer>
  );
};

export default MainSettings;
