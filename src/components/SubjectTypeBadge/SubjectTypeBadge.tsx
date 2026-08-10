import React from 'react';
import { SubjectType } from '../../models/Pair';
import CalendarBlank from '../../assets/icons/calendar-blank.svg?react';
import dayjs from 'dayjs';
import { cva } from 'class-variance-authority';
import { cn } from '../../common/utils/cn';

const backgroundVariants = cva('', {
  variants: {
    type: {
      [SubjectType.Lab]: 'bg-other-orange',
      [SubjectType.Practice]: 'bg-other-red',
      [SubjectType.Lecture]: 'bg-other-purple',
    },
  },
});

const foregroundVariants = cva('', {
  variants: {
    type: {
      [SubjectType.Lab]: 'text-other-orange outline-other-orange',
      [SubjectType.Practice]: 'text-other-red outline-other-red',
      [SubjectType.Lecture]: 'text-other-purple outline-other-purple',
    },
  },
});

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
  if (dates.length) {
    return (
      <div
        className={cn(
          'flex items-center gap-1.5 rounded-lg py-0.75 pr-0.75 pl-1.5 text-center font-medium -outline-offset-1 outline-1 outline-solid',
          foregroundVariants({ type }),
        )}
      >
        <CalendarBlank />
        {children}
        <span
          className={cn(
            'self-stretch rounded-md px-2.5 font-medium text-white',
            backgroundVariants({ type }),
          )}
        >
          {getCurrentLesson(dates)}/{dates.length}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-lg px-2.5 py-0.75 text-center font-medium text-white',
        backgroundVariants({ type }),
      )}
    >
      {children}
    </div>
  );
};
