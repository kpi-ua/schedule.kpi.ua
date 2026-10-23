import { StudentPair } from '@/models/StudentPair';

import { IrregularSchedulesTable } from './irregular-schedules-table';
import { LecturerProperty, PairLocationProperty } from './properties';
import { ScheduleItemBase } from './schedule-item-base';
import { ScheduleItemProps } from './types';

export const StudentScheduleContent = <T extends StudentPair>({
  scheduleMatrixCell,
  collapsed,
}: ScheduleItemProps<T>) => {
  const {
    pair: { lecturer, location, dates },
  } = scheduleMatrixCell;

  return (
    <ScheduleItemBase scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed}>
      {lecturer && <LecturerProperty lecturer={lecturer} />}
      {location && <PairLocationProperty location={location} />}
      {!!dates.length && <IrregularSchedulesTable dates={dates} />}
    </ScheduleItemBase>
  );
};
