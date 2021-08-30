import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import {
  Location,
  ScheduleItemType,
  Subject,
  Teacher,
} from './scheduleItem.style';

export const ScheduleItem = ({scheduleItemData, activeTab}) => {
  return (
    <>
      <ScheduleItemType>
        Лекція
      </ScheduleItemType>
      <Subject>
        Вишмат
      </Subject>
      <Teacher>
        <img src={teacherIcon} alt='teacher'/>
        Викладач
      </Teacher>
      <Location>
        <img src={locationIcon} alt='location'/>
        -18
      </Location>
    </>
  );
};

export default ScheduleItem;
