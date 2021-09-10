import { Tab } from './scheduleTypeTab.style';

const ScheduleTypeTab = ({ tabClick, activeTab, children }) => {
  return (
    <Tab active={activeTab} onClick={tabClick}>
      {children}
    </Tab>
  );
};

export default ScheduleTypeTab;
