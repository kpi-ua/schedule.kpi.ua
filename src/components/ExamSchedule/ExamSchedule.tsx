import dayjs from 'dayjs';
import {
  CardDate,
  CardMainData,
  CardWrapper,
  Date,
  DateWrapper,
  DaysLeft,
  DividerRed,
  Location,
  Subject,
  Teacher,
  Year,
} from './Exam.style';
import TeacherIcon from '../../assets/icons/teacher.svg?react';
import LocationIcon from '../../assets/icons/location.svg?react';
import ClockIcon from '../../assets/icons/clock.svg?react';
import { Flex } from '../../common/styles/styles';
import { Exam } from '../../models/Exam';
import { pluralizeDays } from '../../common/utils/pluralize';

interface Props {
  exam: Exam;
}

const renderDaysLeft = (value: number) => {
  if (value < 0) {
    return <strong>Завершено</strong>;
  }

  if (value === 0) {
    return <strong>Сьогодні</strong>;
  }

  return (
    <>
      <strong>
        {value} {pluralizeDays(value)}
      </strong>{' '}
      до початку
    </>
  );
};

const ExamSchedule = ({ exam }: Props) => {
  const { subject, lecturerName, room, daysLeft } = exam;

  const date = dayjs(exam.date);

  return (
    <CardWrapper $pastEvent={daysLeft < 0}>
      <Flex>
        <DividerRed />
        <CardMainData>
          <Subject>{subject}</Subject>
          <Teacher>
            <ClockIcon />
            {date.format('HH:mm')}
          </Teacher>
          <Teacher>
            <TeacherIcon />
            {lecturerName}
          </Teacher>
          <Location>
            <LocationIcon />
            {room}
          </Location>
        </CardMainData>
      </Flex>
      <DateWrapper>
        <CardDate>
          <Year>{date.year()}</Year>
          <Date>{date.format('DD MMMM')}</Date>
          <DaysLeft>{renderDaysLeft(daysLeft)}</DaysLeft>
        </CardDate>
      </DateWrapper>
    </CardWrapper>
  );
};

export default ExamSchedule;
