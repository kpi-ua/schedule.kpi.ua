import { GroupName, Location, ScheduleItemCurrent, ScheduleItemHeader, ScheduleItemType, Subject, Teacher,
   ScheduleItemTypeLab, ScheduleItemTypePrac, ScheduleItemTypeLec } from './scheduleItemContent.style';
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
  const groups = scheduleItemData && (scheduleItemData.group || '').split(',');
  const tag = scheduleItemData && scheduleItemData.tag;

  const getType = () => {  
    if(tag === "lec") return <ScheduleItemTypeLec>{type}</ScheduleItemTypeLec>
    else if(tag === "lab") return <ScheduleItemTypeLab>{type}</ScheduleItemTypeLab>
    else if(tag === "prac") return <ScheduleItemTypePrac>{type}</ScheduleItemTypePrac>
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
              <UnstyledLink to={routes.LECTURER + `?lecturerId=${teacherId}`}>{teacher}</UnstyledLink>
            </Teacher> : null
          }
          <Location>
            <Pictogram src={locationIcon} alt="location"/>
            {location}
          </Location>
          <GroupName>
            <div>
              {
                groups.map((group, idx) => {
                  return <UnstyledLink key={group} to={routes.GROUP + `?groupName=${group}`}>{group}{idx !== groups.length - 1 ? ', ' : ''}</UnstyledLink>;
                })
              }
            </div>
          </GroupName>
        </>
        : null}
    </div>
  );
};

export default ScheduleItemContent;