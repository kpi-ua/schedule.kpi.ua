import { GroupName, Location, ScheduleItemCurrent, ScheduleItemHeader, Subject, Teacher, LocationLink } from './scheduleItemContent.style';
import teacherIcon from '@/assets/icons/teacher.svg';
import locationIcon from '@/assets/icons/location.svg';
import { Pictogram, UnstyledLink } from '@/common/styles/styles';
import { routes } from '@/common/constants/routes';
import { usePreloadedListContext } from '@/common/context/preloadedListsContext';
import { unique } from '@/common/utils/unique';
import React, { useEffect, useState } from 'react';
import { useLecturerContext } from '@/common/context/lecturerContext';
import { useGroupContext } from '@/common/context/groupContext';
import { setLocalStorageItem } from '@/common/utils/parsedLocalStorage';
import { SUBJECT_TYPES } from '@/common/constants/subjectTypes';

interface Props {
  scheduleItemData: {
    name: string;
    teacherName: string;
    lecturerId: string;
  };
  collapsed: boolean,
}

const ScheduleItemContent: React.FC<Props> = ({scheduleItemData, collapsed}) => {  
  const subject = scheduleItemData?.name;
  const teacher = scheduleItemData?.teacherName;
  const teacherId = scheduleItemData?.lecturerId;
  const groups = unique((scheduleItemData?.group || '').split(','));
  const tag = scheduleItemData?.tag;
  const allGroups = usePreloadedListContext().groups;
  const [location, setLocation] = useState(scheduleItemData && scheduleItemData.place)
  const {setLecturer} = useLecturerContext()
  const {setGroup} = useGroupContext()

  const ScheduleItemComponent = SUBJECT_TYPES[tag]?.component
  const scheduleItemTitle = SUBJECT_TYPES[tag]?.title 

  useEffect(() => {
    if(location.endsWith('-')){
      setLocation(location.slice(0, -1))
    }
  }, [location, setLocation])

  const handleLecturerClick = () => {
    setLocalStorageItem("lecturerId", teacherId)
    setLecturer(teacherId)
  }

  const handleGroupClick = (groupId) => {
    return () => {
      const groupFound = allGroups.find(allGroupsItem => allGroupsItem.name.replace(" ", "") === groupId)
      if(groupFound){
        setLocalStorageItem("groupId", groupFound.id)
        setGroup(groupFound.id)
      }
    }
  }

  const getGroupIdByName = (groupName) => {
    const groupFound = allGroups.find(allGroupsItem => allGroupsItem.name.replace(" ", "") === groupName)
    if(groupFound){
      return groupFound.id
    }
    else{
      return ""
    }
  }

  const getGroup = (group, index, length) => {
    return `${group.split("(")[0]}${index === length - 1 ? "" : ","} `
  }

  const getLocationLink = () => {
    return `https://kpi.ua/k-${parseInt(location.split("-")[0])}`
  }

  const getGroupLink = (group) => {
    return `${routes.GROUP}?groupId=${getGroupIdByName(group)}`
  }

  return (
    <div>
      <ScheduleItemHeader>
        {ScheduleItemComponent && <ScheduleItemComponent>{scheduleItemTitle}</ScheduleItemComponent>}
        {scheduleItemData.currentDay && <ScheduleItemCurrent>ЗАРАЗ</ScheduleItemCurrent>}
      </ScheduleItemHeader>
      <Subject>
        {subject}
      </Subject>
      {!collapsed &&
        <>
          {
            teacher &&
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher"/>
              <UnstyledLink onClick={handleLecturerClick} to={routes.LECTURER + `?lecturerId=${teacherId}`}>{teacher}</UnstyledLink>
            </Teacher>
          }
          {
            location &&
            <Location>
              <Pictogram src={locationIcon} alt="location"/>
              {
              location.split("-")[0] ? 
              <LocationLink href={getLocationLink()} target="_blank" rel="noopener noreferrer">
                {location}
              </LocationLink>
              : location
              } 
            </Location>
          }
          <GroupName>
            <div>
              {
                groups.map((group, index) => {
                  return <UnstyledLink onClick={handleGroupClick(group)}
                  key={group}
                  to={getGroupLink(group)}>
                    {getGroup(group, index, groups.length)}
                  </UnstyledLink>;
                })
              }
            </div>
          </GroupName>
        </>
      }
    </div>
  );
};

export default ScheduleItemContent;