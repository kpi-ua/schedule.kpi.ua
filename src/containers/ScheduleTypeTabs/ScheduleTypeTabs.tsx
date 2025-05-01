import ScheduleTypeTab from '../../components/ScheduleTypeTab';
import { TabContainer } from './ScheduleTypeTabs.style';
import { routes } from '../../common/constants/routes';

const ScheduleTypeTabs = () => {
  const tabs = [
    { value: routes.INDEX, label: 'Розклад занять' },
    { value: routes.SESSION, label: 'Розклад сесії' },
    { value: routes.LECTURER, label: 'Розклад для викладачів' },
  ];

  const TabComponents = tabs.map((tab) => {
    return (
      <ScheduleTypeTab url={tab.value} key={tab.value}>
        {tab.label}
      </ScheduleTypeTab>
    );
  });

  return (
    <TabContainer $justifyContent="space-between" $alignItems="center" $gap={'37px'}>
      {TabComponents}
    </TabContainer>
  );
};

export default ScheduleTypeTabs;
