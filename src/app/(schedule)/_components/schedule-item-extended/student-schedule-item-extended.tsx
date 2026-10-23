'use client';

import { useMemo } from 'react';

import { StudentPair } from '@/models/StudentPair';

import { StudentScheduleContent } from '../schedule-item/student-schedule-content';
import { ScheduleItemExtended } from './schedule-item-extended';
import { ExtendedScheduleItemProps } from './types';

export const StudentScheduleItemExtended = <T extends StudentPair>({
  scheduleMatrixCell,
}: ExtendedScheduleItemProps<T>) => {
  const hasData = useMemo(() => {
    const emptyEntries = scheduleMatrixCell.filter((x) => !x.pair.lecturer && !x.pair.location && !x.pair.dates.length);

    return emptyEntries.length !== scheduleMatrixCell.length;
  }, [scheduleMatrixCell]);

  return (
    <ScheduleItemExtended
      scheduleMatrixCell={scheduleMatrixCell}
      childComponent={StudentScheduleContent}
      hasData={hasData}
    />
  );
};
