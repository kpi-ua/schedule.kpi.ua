import { CardDate, CardMainData, CardWrapper, Divider, DividerRed, Location, Subject, Teacher, } from './exam.style';
import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import clock from '../../assets/icons/clock.svg';
import { Flex, Pictogram } from '../../common/styles/styles';

const ExamComponent = ({data}) => {

  const subject = data && data.subject;
  const teacher = data && data.lecturerName;
  const location = data && data.room;
  const date = data && new Date(data.date);
  const daysLeft = data && data.daysLeft;
  const day = date.getDate();

  return (
    <div>
      <CardWrapper>
        <Flex>
          <DividerRed/>
          <CardMainData>
            <Subject>{subject}</Subject>
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher"/>
              {teacher}
            </Teacher>
            <Teacher>
              <Pictogram src={clock} alt="time"/>
              {date.toLocaleTimeString('en-US', {timeStyle: 'short'})}
            </Teacher>
            <Location>
              <Pictogram src={locationIcon} alt="location"/>
              {location}
            </Location>
          </CardMainData>
        </Flex>
        <Flex>
          <Divider/>
          <CardDate>
            <h3>{date.getFullYear()}</h3>
            <h2> {day < 10 ? '0' + day : day} Січня</h2>
            {/* TODO calculate  */}
            <h3>{daysLeft} днів до початку</h3>
          </CardDate>
        </Flex>
      </CardWrapper>
    </div>
  );
};

export default ExamComponent;
