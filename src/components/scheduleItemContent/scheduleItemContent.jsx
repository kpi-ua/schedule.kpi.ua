import { GroupName, Location, ScheduleItemCurrent, ScheduleItemHeader, Subject, Teacher,
  ScheduleItemTypeLab, ScheduleItemTypePrac, ScheduleItemTypeLec, LocationLink } from './scheduleItemContent.style';
import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import { Pictogram, UnstyledLink } from '../../common/styles/styles';
import { routes } from '../../common/constants/routes';
import { usePreloadedListContext } from '../../common/context/preloadedListsContext';
import { unique } from '../../common/utils/unique';
import { useEffect, useState } from 'react';
import { useLecturerContext } from '../../common/context/lecturerContext';
import { useGroupContext } from '../../common/context/groupContext';

const ScheduleItemContent = ({scheduleItemData, collapsed}) => {  
  const subject = scheduleItemData && scheduleItemData.name;
  const teacher = scheduleItemData && scheduleItemData.teacherName;
  const teacherId = scheduleItemData && scheduleItemData.lecturerId;
  const groups = scheduleItemData && unique((scheduleItemData.group || '').split(','));
  const tag = scheduleItemData && scheduleItemData.tag;
  const allGroups = usePreloadedListContext().groups;
  const [location, setLocation] = useState(scheduleItemData && scheduleItemData.place)
  const {setLecturer} = useLecturerContext()
  const {setGroup} = useGroupContext()

  useEffect(() => {
    if(location.endsWith('-')){
      setLocation(location.slice(0, -1))
    }
  }, [location, setLocation])

  const handleLecturerClick = () => {
    localStorage.setItem("lecturerId", teacherId)
    setLecturer(teacherId)
  }

  const handleGroupClick = (groupId) => {
    return () => {
      const groupFound = allGroups.find(allGroupsItem => allGroupsItem.name.replace(" ", "") === groupId)
      if(groupFound){
        localStorage.setItem("groupId", groupFound.id)
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

  const getType = () => {  
    if(tag === "lec") return <ScheduleItemTypeLec>Лек</ScheduleItemTypeLec>
    else if(tag === "lab") return <ScheduleItemTypeLab>Лаб</ScheduleItemTypeLab>
    else if(tag === "prac") return <ScheduleItemTypePrac>Прак</ScheduleItemTypePrac>
  } 

  return (
    <div>
      <ScheduleItemHeader>
        {getType()}
        {
          scheduleItemData.currentDay ?
            <ScheduleItemCurrent>ЗАРАЗ</ScheduleItemCurrent> :
            null
        }
      </ScheduleItemHeader>
      <Subject>
        {subject}
      </Subject>
      {!collapsed ?
        <>
          {
            teacher ?
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher"/>
              <UnstyledLink onClick={handleLecturerClick} to={routes.LECTURER + `?lecturerId=${teacherId}`}>{teacher}</UnstyledLink>
            </Teacher> : null
          }
          {
            location ?
            <Location>
              <Pictogram src={locationIcon} alt="location"/>
              {
              location.split("-")[0] ? 
              <LocationLink href={`https://kpi.ua/k-${parseInt(location.split("-")[0])}`} target="_blank" rel="noopener noreferrer">{location}</LocationLink>
              : location
              } 
            </Location> : null
          }
          <GroupName>
            <div>
              {
                groups.map((group, idx) => {
                  return <UnstyledLink onClick={handleGroupClick(group)}
                  key={group}
                  to={routes.GROUP + `?groupId=${getGroupIdByName(group)}`}>{group.split("(")[0]}{idx !== groups.length - 1 ? ', ' : ''}
                  </UnstyledLink>;
                })
              }
            </div>
          </GroupName>
        </>
        : null
      }
    </div>
  );
};

export default ScheduleItemContent;