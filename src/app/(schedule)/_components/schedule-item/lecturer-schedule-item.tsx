'use client';

import { LecturerPair } from '@/models/LecturerPair';

import { LecturerScheduleContent } from './lecturer-schedule-content';
import { ScheduleItemProps } from './types';

export const LecturerScheduleItem = <T extends LecturerPair>({
  scheduleMatrixCell,
  collapsed,
}: ScheduleItemProps<T>) => {
  return (
    <div className="z-5 rounded-2xl border border-neutral-200 bg-bg-card p-4 shadow-schedule-item">
      <LecturerScheduleContent scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed} />
    </div>
  );
};
