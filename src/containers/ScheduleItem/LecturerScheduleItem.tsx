import { LecturerPair } from '../../models/LecturerPair';
import { ScheduleItemProps } from './types';
import LecturerScheduleContent from './LecturerScheduleContent';
import { ScheduleItemWrapper } from './ScheduleItem.style';

const LecturerScheduleItem = <T extends LecturerPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  return (
    <ScheduleItemWrapper>
      <LecturerScheduleContent scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed} />
    </ScheduleItemWrapper>
  );
};

export default LecturerScheduleItem;
