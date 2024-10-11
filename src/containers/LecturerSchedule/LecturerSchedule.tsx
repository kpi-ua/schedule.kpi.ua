import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import ScheduleWrapper from '../scheduleWrapper';
import { useLecturerContext } from '../../common/context/lecturerContext';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';

export const LecturerSchedule = () => {
  const { item: lecturer } = useLecturerContext();
  const { data } = useLecturerSchedule(lecturer?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper schedule={data?.data} />
    </GridWrapper>
  );
};
