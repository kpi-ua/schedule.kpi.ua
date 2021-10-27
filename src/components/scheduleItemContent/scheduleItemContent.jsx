import {
  Location,
  ScheduleItemCurrent,
  ScheduleItemHeader,
  ScheduleItemType, Subject, Teacher
} from "./scheduleItemContent.style";
import teacherIcon from "../../assets/icons/teacher.svg";
import locationIcon from "../../assets/icons/location.svg";

const ScheduleItemContent = ({scheduleItemData}) => {
  const time = scheduleItemData && scheduleItemData.time;
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
          <img src={teacherIcon} alt='teacher'/>
          {teacher}
        </Teacher>
        <Location>
          <img src={locationIcon} alt='location'/>
          {location}
        </Location>
      </div>
  )
}

export default ScheduleItemContent;