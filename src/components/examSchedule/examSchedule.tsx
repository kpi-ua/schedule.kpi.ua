import { CardDate, CardMainData, CardWrapper, Divider, DividerRed, Location, Subject, Teacher, } from './exam.style';
import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';
import clock from '../../assets/icons/clock.svg';
import { Flex, Pictogram } from '../../common/styles/styles';
import React from 'react';
import { Exam } from '../../models/Exam';
import moment from 'moment';

interface Props {
  exam: Exam;
}

const ExamSchedule = ({ exam }: Props) => {
  const {
    subject,
    lecturerName,
    room,
  } = exam;

  const date = moment(exam.date);
  const time = moment(exam.date).locale('en-US');
  const daysLeft = moment.duration(date.diff(moment())).days();

  return (
    <div>
      <CardWrapper>
        <Flex>
          <DividerRed/>
          <CardMainData>
            <Subject>{subject}</Subject>
            <Teacher>
              <Pictogram src={teacherIcon} alt="teacher"/>
              {lecturerName}
            </Teacher>
            <Teacher>
              <Pictogram src={clock} alt="time"/>
              {time.format('h:mm A')}
            </Teacher>
            <Location>
              <Pictogram src={locationIcon} alt="location"/>
              {room}
            </Location>
          </CardMainData>
        </Flex>
        <Flex>
          <Divider/>
          <CardDate>
            <h3>{date.year()}</h3>
            <h2>{date.format('DD MMMM')}</h2>
            {/* TODO: Provide more user-friendly text when exam is finished */}
            <h3>{daysLeft >= 0 ? daysLeft : 0} днів до початку</h3>
          </CardDate>
        </Flex>
      </CardWrapper>
    </div>
  );
};

export default ExamSchedule;
