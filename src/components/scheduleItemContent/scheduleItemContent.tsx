import {
  GroupName,
  Location,
  LocationLink,
  ScheduleItemCurrent,
  ScheduleItemHeader,
  Subject,
  Teacher,
} from './scheduleItemContent.style';
import { Pictogram, StyledLink } from '../../common/styles/styles';
import React, { useMemo } from 'react';
import { compact, uniq } from 'lodash-es';

import { SUBJECT_TYPES } from '../../common/constants/subjectTypes';
import { ScheduleMatrixCell } from '../../common/utils/generateScheduleMatrix';
import locationIcon from '../../assets/icons/location.svg';
import { routes } from '../../common/constants/routes';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import teacherIcon from '../../assets/icons/teacher.svg';
import { useStore } from '../../store';
import { usePreloadedList } from '../../common/hooks/usePreloadedList';

interface Props {
  scheduleMatrixCell: ScheduleMatrixCell;
  collapsed?: boolean;
}

const ScheduleItemContent: React.FC<Props> = ({ scheduleMatrixCell, collapsed }) => {
  const { name, teacherName, lecturerId, group } = scheduleMatrixCell;

  const scheduleGroups = compact(uniq((group || '').split(',')));
  const tag = scheduleMatrixCell?.tag;
  const { groups, lecturers } = usePreloadedList();

  const location = useMemo(() => {
    const place = scheduleMatrixCell.place;

    return place.endsWith('-') ? place.slice(0, -1) : place;
  }, [scheduleMatrixCell.place]);

  const setGroup = useStore((store) => store.setGroup);
  const setLecturer = useStore((store) => store.setLecturer);

  const ScheduleItemComponent = SUBJECT_TYPES[tag]?.component;
  const scheduleItemTitle = SUBJECT_TYPES[tag]?.title;

  const findGroup = (groupId: string) => groups.find(({ name }) => name.replace(' ', '') === groupId);

  const findLecturer = (lecturerId: string) => lecturers.find(({ id }) => id === lecturerId);

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
    return `${group.split('(')[0]}${index === length - 1 ? '' : ','} `;
  };

  const getLocationLink = () => {
    return `https://kpi.ua/k-${parseInt(location.split('-')[0])}`;
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
        {ScheduleItemComponent && <ScheduleItemComponent>{scheduleItemTitle}</ScheduleItemComponent>}
        {scheduleMatrixCell?.currentPair && <ScheduleItemCurrent>ЗАРАЗ</ScheduleItemCurrent>}
      </ScheduleItemHeader>
      <Subject>{name}</Subject>
      {!collapsed && (
        <>
          {teacherName && (
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher" />
              <StyledLink onClick={handleLecturerClick} to={routes.LECTURER + `?lecturerId=${lecturerId}`}>
                {teacherName}
              </StyledLink>
            </Teacher>
          )}
          {location && (
            <Location>
              <Pictogram src={locationIcon} alt="location" />
              {location.split('-')[0] ? (
                <LocationLink href={getLocationLink()} target="_blank" rel="noopener noreferrer">
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
                  <StyledLink onClick={handleGroupClick(group)} key={group} to={getGroupLink(group)}>
                    {getGroup(group, index, scheduleGroups.length)}
                  </StyledLink>
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
