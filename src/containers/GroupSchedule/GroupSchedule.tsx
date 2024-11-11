import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import ScheduleWrapper from '../scheduleWrapper';
import { useStudentSchedule } from '../../queries/useStudentSchedule';
import {useStore} from "../../store";

export const GroupSchedule = () => {
  const group = useStore(state => state.group);
  const { data } = useStudentSchedule(group?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper schedule={data?.data} />
    </GridWrapper>
  );
};
