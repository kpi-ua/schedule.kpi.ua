import { LecturerPair } from '../../models/LecturerPair';
import { ScheduleItemProps } from './types';
import ScheduleItemBase from './ScheduleItemBase';
import PairLocationProperty from './PairLocationProperty';
import { IrregularSchedulesTable } from './IrregularSchedulesTable';
import GroupProperty from './GroupProperty';

const LecturerScheduleContent = <T extends LecturerPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
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

export default LecturerScheduleContent;
