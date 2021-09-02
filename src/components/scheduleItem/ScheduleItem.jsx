import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import {
  Location,
  ScheduleItemType,
  Subject,
  Teacher,
} from './scheduleItem.style';

export const ScheduleItem = ({scheduleItemData, activeTab}) => {
  const time = scheduleItemData && scheduleItemData.time;
  const type = scheduleItemData && scheduleItemData.type;
  const subject = scheduleItemData && scheduleItemData.name;
  const teacher = scheduleItemData && scheduleItemData.teachersName;
  const location = scheduleItemData && scheduleItemData.place;
  return scheduleItemData ? (
    <>
      <ScheduleItemType>
        {type}
      </ScheduleItemType>
      <Subject>
        {subject}
      </Subject>
      <Teacher>
        <img src={teacherIcon} alt='teacher'/>
        {teacher}
      </Teacher>
      <Location>
        <img src={locationIcon} alt='location'/>
        {location}
      </Location>
      {time}
    </>
  ) : null;
};

export default ScheduleItem;
