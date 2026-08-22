import dayjs from 'dayjs';
import TeacherIcon from '../../assets/icons/teacher.svg?react';
import LocationIcon from '../../assets/icons/location.svg?react';
import ClockIcon from '../../assets/icons/clock.svg?react';
import { Exam } from '../../models/Exam';
import { pluralizeDays } from '../../common/utils/pluralize';
import { cn } from '../../common/utils/cn';

interface Props {
  exam: Exam;
}

const getDaysLeft = (examDate: string) => dayjs(examDate).startOf('day').diff(dayjs().startOf('day'), 'day');

const renderDaysLeft = (daysLeft: number) => {
  if (daysLeft < 0) {
    return <strong>Завершено</strong>;
  }

  if (daysLeft === 0) {
    return <strong>Сьогодні</strong>;
  }

  if (daysLeft === 1) {
    return <strong>Завтра</strong>;
  }

  return (
    <>
      <strong>
        {daysLeft} {pluralizeDays(daysLeft)}
      </strong>{' '}
      до початку
    </>
  );
};

const ExamSchedule = ({ exam }: Props) => {
  const { subject, lecturerName, room } = exam;

  const date = dayjs(exam.date);
  const daysLeft = getDaysLeft(exam.date);

  return (
    <div
      className={cn(
        'flex w-full max-w-[700px] flex-row items-stretch justify-between gap-4 rounded-2xl border border-neutral-200 bg-bg-card p-4 shadow-schedule-item max-sm:flex-col-reverse',
        daysLeft < 0 && 'opacity-50',
      )}
    >
      <div className="flex">
        <div className="rounded-[99px] border-r-4 border-basic-red" />
        <div className="ml-4">
          <div className="text-sm leading-[17px] font-bold text-primary-font">{subject}</div>
          <div className="relative mt-2.5 flex items-center gap-1 text-[13px] leading-4 font-semibold text-primary-font">
            <ClockIcon />
            {date.format('HH:mm')}
          </div>
          <div className="relative mt-2.5 flex items-center gap-1 text-[13px] leading-4 font-semibold text-primary-font">
            <TeacherIcon />
            {lecturerName}
          </div>
          <div className="relative mt-2.5 flex items-center gap-[7px] text-[13px] leading-4 font-semibold text-primary-font">
            <LocationIcon />
            {room}
          </div>
        </div>
      </div>
      <div className="flex border-l border-neutral-divider pl-8 max-sm:border-l-0 max-sm:pl-0">
        <div className="flex min-w-[150px] flex-col self-center text-black">
          <span className="text-[13px] leading-[18px] font-semibold">{date.year()}</span>
          <span className="mt-px mb-1.5 text-2xl leading-8 font-semibold">{date.format('DD MMMM')}</span>
          <span className="text-[13px] leading-4 font-medium">{renderDaysLeft(daysLeft)}</span>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
