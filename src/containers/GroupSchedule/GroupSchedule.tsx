import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import ScheduleWrapper from '../scheduleWrapper';
import { useGroupContext } from '../../common/context/groupContext';
import { useStudentSchedule } from '../../queries/useStudentSchedule';

export const GroupSchedule = () => {
  const { item: group } = useGroupContext();
  const { data } = useStudentSchedule(group?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper schedule={data?.data} />
    </GridWrapper>
  );
};
