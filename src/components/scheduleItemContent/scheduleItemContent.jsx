import { GroupName, Location, ScheduleItemCurrent, ScheduleItemHeader, ScheduleItemType, Subject, Teacher } from './scheduleItemContent.style';
import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import { Pictogram, UnstyledLink } from '../../common/styles/styles';
import { routes } from '../../common/constants/routes';

const ScheduleItemContent = ({scheduleItemData, collapsed}) => {
  const type = scheduleItemData && scheduleItemData.type;
  const subject = scheduleItemData && scheduleItemData.name;
  const teacher = scheduleItemData && scheduleItemData.teacherName;
  const teacherId = scheduleItemData && scheduleItemData.lecturerId;
  const location = scheduleItemData && scheduleItemData.place;
  const group = scheduleItemData && scheduleItemData.group;
  return (
    <div>
      <ScheduleItemHeader>
        <ScheduleItemType>{type}</ScheduleItemType>
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
              <UnstyledLink to={routes.LECTURER + `?lecturerId=${teacherId}`}>{teacher}</UnstyledLink>
            </Teacher> : null
          }
          <Location>
            <Pictogram src={locationIcon} alt="location"/>
            {location}
          </Location>
          <GroupName>
            <UnstyledLink to={routes.GROUP + `?groupName=${group}`}>{group}</UnstyledLink>
          </GroupName>
        </>
        : null}
    </div>
  );
};

export default ScheduleItemContent;