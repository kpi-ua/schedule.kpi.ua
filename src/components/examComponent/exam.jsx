import {
  Location,
  ScheduleItemCurrent,
  ScheduleItemHeader,
  ScheduleItemType,
  Subject,
  Teacher,
  GroupName,
  CardWrapper,
  CardMainData,
  Divider,
  CardDate,
  DividerRed,
} from "./exam.style";
import teacherIcon from "../../assets/icons/teacher.svg";
import locationIcon from "../../assets/icons/location.svg";
import sun from "../../assets/icons/sun.svg"
import clock from "../../assets/icons/clock.svg"
import { Pictogram } from "../../common/styles/styles";

const ExamComponent = ({ data }) => {

  const subject = data && data.subjectShort;
  const teacher = data && data.lecturerName;
  const location = data && data.room;
  const date = data && new Date(data.date)

  return (
    <>
      <div>
        <CardWrapper>
          <DividerRed />
          <CardMainData>
            <ScheduleItemHeader></ScheduleItemHeader>
            <Subject>{subject}</Subject>
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher" />
              {teacher}
            </Teacher>
            <Teacher>
              <Pictogram src={clock} alt="time" />
             {date.toLocaleTimeString("en-US", {timeStyle : "short"})}
            </Teacher>
            <Location>
              <Pictogram src={locationIcon} alt="location" />
              {location}
            </Location>
          </CardMainData>
          <Divider />
          <CardDate>
            <h2>{date.getFullYear()}</h2>
            <h1> {date.getDate()} Січня</h1>
            {/* TODO calculate  */}
            {/* <h2>26 днів до початку</h2> */}
          </CardDate>
        </CardWrapper>
      </div>
    </>
  );
};

export default ExamComponent;
