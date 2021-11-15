import { Location, ScheduleItemCurrent, ScheduleItemHeader, ScheduleItemType, Subject, Teacher } from './scheduleItemContent.style';
import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import { Pictogram } from '../../common/styles/styles';

const ScheduleItemContent = ({scheduleItemData}) => {
  const type = scheduleItemData && scheduleItemData.type;
  const subject = scheduleItemData && scheduleItemData.name;
  const teacher = scheduleItemData && scheduleItemData.teachersName;
  const location = scheduleItemData && scheduleItemData.place;

  return (
    <div>
      <ScheduleItemHeader>
        <ScheduleItemType>{type}</ScheduleItemType>
        <ScheduleItemCurrent>ЗАРАЗ</ScheduleItemCurrent>
      </ScheduleItemHeader>
      <Subject>
        {subject}
      </Subject>
      <Teacher>
        <Pictogram src={teacherIcon} alt="teacher"/>
        {teacher}
      </Teacher>
      <Location>
        <Pictogram src={locationIcon} alt="location"/>
        {location}
      </Location>
    </div>
  );
};

export default ScheduleItemContent;