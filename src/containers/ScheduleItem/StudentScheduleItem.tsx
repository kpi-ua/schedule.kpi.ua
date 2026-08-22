import { StudentPair } from '../../models/StudentPair';
import { ScheduleItemProps } from './types';
import StudentScheduleContent from './StudentScheduleContent';

const StudentScheduleItem = <T extends StudentPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  return (
    <div className="z-5 rounded-2xl border border-neutral-200 bg-bg-card p-4 shadow-schedule-item">
      <StudentScheduleContent scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed} />
    </div>
  );
};

export default StudentScheduleItem;
