import { useEffect, useRef, useState } from "react";

import { Tab } from "./scheduleTypeTab.style";
import { UnstyledLink } from "../../common/styles/styles";
import { getLocalStorageItem } from "../../common/utils/parsedLocalStorage";
import { routes } from "../../common/constants/routes";
import { useGroupContext } from "../../common/context/groupContext";
import { useLecturerContext } from "../../common/context/lecturerContext";
import { useLocation } from "react-router-dom";

interface ScheduleTypeTabProps {
  tabClick?: () => void;
  children: React.ReactNode;
  url: string;
}

const ScheduleTypeTab = ({
  tabClick,
  children,
  url,
}: ScheduleTypeTabProps) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = location.pathname === url;
  const { item: group } = useGroupContext()!;
  const { item: lecturer } = useLecturerContext();
  const [urlWithParams, setUrlWithParams] = useState(url);

  useEffect(() => {
    if (url.includes(routes.LECTURER)) {
      const localStorageLecturerId = getLocalStorageItem("lecturerId");
      if (localStorageLecturerId) {
        setUrlWithParams(`${url}?groupId=${localStorageLecturerId}`);
      }
    } else if (url.includes(routes.GROUP) || url.includes(routes.SESSION)) {
      const localStorageGroupId = getLocalStorageItem("groupId");
      if (localStorageGroupId) {
        setUrlWithParams(`${url}?groupId=${localStorageGroupId}`);
      }
    }
  }, [url, setUrlWithParams, isActive, group?.id, lecturer?.id]);

  const handleClick = () => {
    if (tabRef.current) {
      tabRef.current.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth'
      });
    }

    tabClick?.();
  };

  return (
    <Tab active={isActive} onClick={handleClick} ref={tabRef}>
      <UnstyledLink to={urlWithParams}>{children}</UnstyledLink>
    </Tab>
  );
};

export default ScheduleTypeTab;
