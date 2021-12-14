import { Tab } from './scheduleTypeTab.style';
import { useLocation } from 'react-router-dom';
import { UnstyledLink } from '../../common/styles/styles';

const ScheduleTypeTab = ({tabClick, activeTab, children, url}) => {
  const location = useLocation();

  const isActive = location.pathname === url;

  return (
    <Tab active={isActive} onClick={tabClick}>
      <UnstyledLink to={url}>
        {children}
      </UnstyledLink>
    </Tab>
  );
};

export default ScheduleTypeTab;
