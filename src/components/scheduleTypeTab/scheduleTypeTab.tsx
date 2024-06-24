import { Tab } from './scheduleTypeTab.style';
import { useLocation } from 'react-router-dom';
import { UnstyledLink } from '@/common/styles/styles';
import { routes } from '@/common/constants/routes';
import { useEffect, useState } from 'react';
import { useGroupContext } from '@/common/context/groupContext';
import { useLecturerContext } from '@/common/context/lecturerContext';
import { getLocalStorageItem } from '@/common/utils/parsedLocalStorage';

const ScheduleTypeTab = ({tabClick, activeTab, children, url}) => {
  const location = useLocation();

  const isActive = location.pathname === url;
  const { group } = useGroupContext();
  const { lecturer } = useLecturerContext()
  const [urlWithParams, setUrlWithParams] = useState(url)

  useEffect(() => {
    if(url.includes(routes.LECTURER)){
      const localStorageLecturerId = getLocalStorageItem("lecturerId")
      if(localStorageLecturerId){
        setUrlWithParams(`${url}?groupId=${localStorageLecturerId}`)
      }
    }
    else if(url.includes(routes.GROUP) || url.includes(routes.SESSION)){
      const localStorageGroupId = getLocalStorageItem("groupId")
      if(localStorageGroupId){
        setUrlWithParams(`${url}?groupId=${localStorageGroupId}`)
      }
    }
  }, [url, setUrlWithParams, isActive, group, lecturer])

  return (
    <Tab active={isActive} onClick={tabClick}>
      <UnstyledLink to={urlWithParams}>
        {children}
      </UnstyledLink>
    </Tab>
  );
};

export default ScheduleTypeTab;

