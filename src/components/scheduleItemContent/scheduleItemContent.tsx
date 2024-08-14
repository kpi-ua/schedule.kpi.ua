import {
  GroupName,
  Location,
  ScheduleItemCurrent,
  ScheduleItemHeader,
  Subject,
  Teacher,
  LocationLink,
} from "./scheduleItemContent.style";
import teacherIcon from "../../assets/icons/teacher.svg";
import locationIcon from "../../assets/icons/location.svg";
import { Pictogram, UnstyledLink } from "../../common/styles/styles";
import { routes } from "../../common/constants/routes";
import { usePreloadedListContext } from "../../common/context/preloadedListsContext";
import React, { useEffect, useState } from "react";
import { useLecturerContext } from "../../common/context/lecturerContext";
import { useGroupContext } from "../../common/context/groupContext";
import { setLocalStorageItem } from "../../common/utils/parsedLocalStorage";
import { SUBJECT_TYPES } from "../../common/constants/subjectTypes";
import { compact, uniq } from 'lodash-es';
import { ScheduleMatrixCell } from '../../common/utils/generateScheduleMatrix';

interface Props {
  scheduleMatrixCell: ScheduleMatrixCell;
  collapsed?: boolean;
}

const ScheduleItemContent: React.FC<Props> = ({
  scheduleMatrixCell,
  collapsed,
}) => {
  const {
    name,
    teacherName,
    lecturerId,
    group,
  } = scheduleMatrixCell;

  const scheduleGroups = compact(uniq((group || '').split(',')));
  const tag = scheduleMatrixCell?.tag;
  const { groups, lecturers } = usePreloadedListContext();
  const [location, setLocation] = useState(
    scheduleMatrixCell && scheduleMatrixCell.place
  );
  const { setLecturer } = useLecturerContext();
  const { setGroup } = useGroupContext()!;

  const ScheduleItemComponent = SUBJECT_TYPES[tag]?.component;
  const scheduleItemTitle = SUBJECT_TYPES[tag]?.title;

  useEffect(() => {
    if (location.endsWith("-")) {
      setLocation(location.slice(0, -1));
    }
  }, [location, setLocation]);

  const findGroup = (groupId: string) => groups.find(
    ({ name }) => name.replace(" ", "") === groupId
  );

  const findLecturer = (lecturerId: string) => lecturers
    .find(({ id }) => id === lecturerId);

  const handleLecturerClick = () => {
    const lecturer = findLecturer(lecturerId);

    if (!lecturer) {
      return;
    }

    setLocalStorageItem('lecturerId', lecturerId);
    setLecturer(lecturer);
  };

  const handleGroupClick = (groupId: string) => {
    return () => {
      const foundGroup = findGroup(groupId);

      if (foundGroup) {
        setLocalStorageItem('groupId', foundGroup.id);
        setGroup(foundGroup);
      }
    };
  };

  const getGroup = (group: string, index: number, length: number) => {
    return `${group.split("(")[0]}${index === length - 1 ? "" : ","} `;
  };

  const getLocationLink = () => {
    return `https://kpi.ua/k-${parseInt(location.split("-")[0])}`;
  };

  const getGroupLink = (group: string) => {
    const groupId = findGroup(group)?.id;

    if (!groupId) {
      return '#';
    }

    return `${routes.GROUP}?groupId=${groupId}`;
  };

  return (
    <div>
      <ScheduleItemHeader>
        {ScheduleItemComponent && (
          <ScheduleItemComponent>{scheduleItemTitle}</ScheduleItemComponent>
        )}
        {scheduleMatrixCell?.currentDay && (
          <ScheduleItemCurrent>ЗАРАЗ</ScheduleItemCurrent>
        )}
      </ScheduleItemHeader>
      <Subject>{name}</Subject>
      {!collapsed && (
        <>
          {teacherName && (
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher" />
              <UnstyledLink
                onClick={handleLecturerClick}
                to={routes.LECTURER + `?lecturerId=${lecturerId}`}
              >
                {teacherName}
              </UnstyledLink>
            </Teacher>
          )}
          {location && (
            <Location>
              <Pictogram src={locationIcon} alt="location" />
              {location.split("-")[0] ? (
                <LocationLink
                  href={getLocationLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location}
                </LocationLink>
              ) : (
                location
              )}
            </Location>
          )}
          <GroupName>
            <div>
              {scheduleGroups.map((group, index) => {
                return (
                  <UnstyledLink
                    onClick={handleGroupClick(group)}
                    key={group}
                    to={getGroupLink(group)}
                  >
                    {getGroup(group, index, scheduleGroups.length)}
                  </UnstyledLink>
                );
              })}
            </div>
          </GroupName>
        </>
      )}
    </div>
  );
};

export default ScheduleItemContent;
