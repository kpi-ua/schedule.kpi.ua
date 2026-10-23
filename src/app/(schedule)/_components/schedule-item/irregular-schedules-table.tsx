import dayjs from 'dayjs';
import { useMemo } from 'react';

import { cn } from '@/lib/utils/cn';
import { isDateTodayOrFuture } from '@/lib/utils/date.utils';

import { IrregularScheduleTime } from './irregular-schedule-time';

interface IrregularSchedulesTableProps {
  dates: string[];
}

type EventPeriod = 'current' | 'future';

const EVENT_PERIODS: Record<EventPeriod, string> = {
  current: 'сьогодні',
  future: 'наступне',
};

const getDatePeriod = (date: string): EventPeriod => {
  if (dayjs().isBefore(date, 'date')) {
    return 'future';
  }

  return 'current';
};

const sortByDates = (dates: string[]) => dates.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());

export const IrregularSchedulesTable = ({ dates }: IrregularSchedulesTableProps) => {
  const sortedFutureDates = useMemo(() => sortByDates(dates.filter(isDateTodayOrFuture)), [dates]);

  return (
    <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-[13px] text-primary-font">
      <span className="font-semibold">Розклад спец. занять</span>
      <hr className="my-2 h-px border-0 bg-neutral-100" />
      <div className="flex flex-col gap-1 text-xs">
        {sortedFutureDates.map((date) => {
          const period = getDatePeriod(date);
          return (
            <div
              className={cn('flex justify-between text-xs opacity-40', period === 'current' && 'opacity-100')}
              key={date}
            >
              <IrregularScheduleTime date={date} />
              <span>{EVENT_PERIODS[period]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
