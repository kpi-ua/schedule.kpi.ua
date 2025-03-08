import { GridWrapper } from '../ScheduleWrapper/ScheduleWrapper.style';
import ScheduleWrapper from '../ScheduleWrapper';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { useStore } from '../../store';

export const LecturerSchedule = () => {
  const lecturer = useStore((state) => state.lecturer);
  const { data } = useLecturerSchedule(lecturer?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper schedule={data?.data} />
    </GridWrapper>
  );
};
