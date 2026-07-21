import React from 'react';
import { SubjectType } from '../../models/Pair';
import CalendarBlank from '../../assets/icons/calendar-blank.svg?react';
import dayjs from 'dayjs';
import { cn } from '../../common/utils/cn';

const subjectTypeStyles: Record<SubjectType, { background: string; foreground: string }> = {
  [SubjectType.Lab]: {
    background: 'bg-other-orange',
    foreground: 'text-other-orange outline-other-orange',
  },
  [SubjectType.Practice]: {
    background: 'bg-other-red',
    foreground: 'text-other-red outline-other-red',
  },
  [SubjectType.Lecture]: {
    background: 'bg-other-purple',
    foreground: 'text-other-purple outline-other-purple',
  },
};

type Props = {
  children: React.ReactNode;
  type: SubjectType;
  dates: string[];
};

const getCurrentLesson = (dates: string[]) => {
  return dates.reduce((acc, date) => {
    return dayjs().isAfter(date, 'date') || dayjs().isSame(date, 'date') ? acc + 1 : acc;
  }, 0);
};

export const SubjectTypeBadge = ({ dates, type, children }: Props) => {
  const styles = subjectTypeStyles[type];

  if (dates.length) {
    return (
      <div
        className={cn(
          'flex items-center gap-1.5 rounded-lg py-0.75 pr-0.75 pl-1.5 text-center font-medium -outline-offset-1 outline-solid outline-1',
          styles.foreground,
        )}
      >
        <CalendarBlank />
        {children}
        <span className={cn('self-stretch rounded-md px-2.5 font-medium text-white', styles.background)}>
          {getCurrentLesson(dates)}/{dates.length}
        </span>
      </div>
    );
  }

  return (
    <div className={cn('rounded-lg px-2.5 py-0.75 text-center font-medium text-white', styles.background)}>
      {children}
    </div>
  );
};
