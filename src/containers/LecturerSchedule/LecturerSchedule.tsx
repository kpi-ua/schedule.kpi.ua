import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import ScheduleWrapper from '../scheduleWrapper';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { useStore } from "../../store";

export const LecturerSchedule = () => {
  const lecturer = useStore(state => state.lecturer);
  const { data } = useLecturerSchedule(lecturer?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper schedule={data?.data} />
    </GridWrapper>
  );
};
