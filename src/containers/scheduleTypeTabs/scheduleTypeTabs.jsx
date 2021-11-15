import Tabs from '../tabs';
import ScheduleTypeTab from '../../components/scheduleTypeTab';
import { useHistory } from 'react-router-dom';
import { TabContainer } from './scheduleTypeTabs.style';

const ScheduleTypeTabs = () => {
  const history = useHistory();

  const tabs = [
    {value: 'student', label: 'Розклад занять', path: '/'},
    {value: 'exam', label: 'Розклад сесії', path: '/sessions'},
    {value: 'teacher', label: 'Розклад для викладачів', path: '/teachers'},
  ];

  const TabComponents = tabs.map((tab) => {
    return <ScheduleTypeTab key={tab.value}>{tab.label}</ScheduleTypeTab>;
  });

  return (
    <TabContainer justifyContent="space-between" alignItems="center" gap={'37px'}>
      <Tabs onTabChanged={(index) => history.push(tabs[index].path)}>
        {TabComponents}
      </Tabs>
    </TabContainer>
  );
};

export default ScheduleTypeTabs;
