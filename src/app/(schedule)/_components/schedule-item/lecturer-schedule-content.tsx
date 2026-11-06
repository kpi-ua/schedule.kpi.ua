import { LecturerPair } from '@/models/lecturer-pair';

import { IrregularSchedulesTable } from './irregular-schedules-table';
import { GroupProperty } from './properties/group-property';
import { PairLocationProperty } from './properties/pair-location-property';
import { ScheduleItemBase } from './schedule-item-base';
import { ScheduleItemProps } from './types';

export const LecturerScheduleContent = <T extends LecturerPair>({
  scheduleMatrixCell,
  collapsed,
}: ScheduleItemProps<T>) => {
  const {
    pair: { groups, location, dates },
  } = scheduleMatrixCell;

  return (
    <ScheduleItemBase scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed}>
      {location && <PairLocationProperty location={location} />}
      <GroupProperty groups={groups} />
      {!!dates.length && <IrregularSchedulesTable dates={dates} />}
    </ScheduleItemBase>
  );
};
