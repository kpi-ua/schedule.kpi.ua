import ScheduleWrapper, { ScheduleGrid } from '../ScheduleWrapper/ScheduleWrapper';
import { useStudentSchedule } from '../../queries/useStudentSchedule';
import { useStore } from '../../store';
import StudentScheduleItem from '../ScheduleItem/StudentScheduleItem';
import StudentScheduleItemExtended from '../ScheduleItemExtended/StudentScheduleItemExtended';

export const GroupSchedule = () => {
  const group = useStore((state) => state.group);
  const { data } = useStudentSchedule(group?.id);

  return (
    <ScheduleGrid>
      <ScheduleWrapper
        schedule={data}
        baseComponent={StudentScheduleItem}
        baseComponentExtended={StudentScheduleItemExtended}
      />
    </ScheduleGrid>
  );
};
