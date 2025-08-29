import { GridWrapper } from '../ScheduleWrapper/ScheduleWrapper.style';
import ScheduleWrapper from '../ScheduleWrapper';
import { useStudentSchedule } from '../../queries/useStudentSchedule';
import { useStore } from '../../store';
import StudentScheduleItem from '../ScheduleItem/StudentScheduleItem';
import StudentScheduleItemExtended from '../ScheduleItemExtended/StudentScheduleItemExtended';

export const GroupSchedule = () => {
  const group = useStore((state) => state.group);
  const { data } = useStudentSchedule(group?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper
        schedule={data}
        baseComponent={StudentScheduleItem}
        baseComponentExtended={StudentScheduleItemExtended}
      />
    </GridWrapper>
  );
};
