import { StudentPair } from '../../models/StudentPair';
import { ScheduleItemProps } from './types';
import StudentScheduleContent from './StudentScheduleContent';
import { ScheduleItemWrapper } from './ScheduleItem.style';

const StudentScheduleItem = <T extends StudentPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  return (
    <ScheduleItemWrapper>
      <StudentScheduleContent scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed} />
    </ScheduleItemWrapper>
  );
};

export default StudentScheduleItem;
