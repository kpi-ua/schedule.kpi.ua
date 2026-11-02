'use client';

import { useMemo } from 'react';

import { LecturerPair } from '@/models/LecturerPair';

import { LecturerScheduleContent } from '../schedule-item/lecturer-schedule-content';
import { ScheduleItemExtended } from './schedule-item-extended';
import { ExtendedScheduleItemProps } from './types';

export const LecturerScheduleItemExtended = <T extends LecturerPair>({
  scheduleMatrixCell,
}: ExtendedScheduleItemProps<T>) => {
  const hasData = useMemo(() => {
    const emptyEntries = scheduleMatrixCell.filter((x) => !x.pair.location && !x.pair.groups && !x.pair.dates.length);

    return emptyEntries.length !== scheduleMatrixCell.length;
  }, [scheduleMatrixCell]);

  return (
    <ScheduleItemExtended
      scheduleMatrixCell={scheduleMatrixCell}
      childComponent={LecturerScheduleContent}
      hasData={hasData}
    />
  );
};
