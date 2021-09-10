import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import {
  Location,
  ScheduleItemType,
  Subject,
  Teacher,
} from './scheduleItem.style';

export const ScheduleItem = ({ scheduleItemData, activeTab }) => {
  const time = scheduleItemData && scheduleItemData.time;
  const type = scheduleItemData && scheduleItemData.type;
  const subject = scheduleItemData && scheduleItemData.name;
  const teacher = scheduleItemData && scheduleItemData.teachersName;
  const location = scheduleItemData && scheduleItemData.place;
  return scheduleItemData ? (
    <>
      <ScheduleItemType>{type}</ScheduleItemType>
      <Subject>
        {document.body.clientWidth >= 1300
          ? subject
          : subject.substring(0, 10) + '...'}
      </Subject>
      <Teacher>
        <img src={teacherIcon} alt='teacher' />
        {document.body.clientWidth >= 1300
          ? teacher
          : '...' +
            teacher
              .split(' ')
              .reverse()
              .filter((item, index) => index < 3)
              .reverse()
              .join(' ')}
      </Teacher>
      <Location>
        <img src={locationIcon} alt='location' />
        {location}
      </Location>
    </>
  ) : null;
};

export default ScheduleItem;
