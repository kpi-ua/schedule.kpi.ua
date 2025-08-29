import { StudentPair } from '../../models/StudentPair';
import { ScheduleItemProps } from './types';
import ScheduleItemBase from './ScheduleItemBase';
import PairLocationProperty from './PairLocationProperty';
import { IrregularSchedulesTable } from './IrregularSchedulesTable';
import LecturerProperty from './LecturerProperty';

const StudentScheduleContent = <T extends StudentPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  const {
    pair: { lecturer, location, dates },
  } = scheduleMatrixCell;

  return (
    <>
      <ScheduleItemBase scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed}>
        {lecturer && <LecturerProperty lecturer={lecturer} />}
        {location && <PairLocationProperty location={location} />}
        {!!dates.length && <IrregularSchedulesTable dates={dates} />}
      </ScheduleItemBase>
    </>
  );
};

export default StudentScheduleContent;
