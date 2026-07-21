import ScheduleWrapper, { ScheduleGrid } from '../ScheduleWrapper/ScheduleWrapper';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { useStore } from '../../store';
import LecturerScheduleItem from '../ScheduleItem/LecturerScheduleItem';
import LecturerScheduleItemExtended from '../ScheduleItemExtended/LecturerScheduleItemExtended';

export const LecturerSchedule = () => {
  const lecturer = useStore((state) => state.lecturer);
  const { data } = useLecturerSchedule(lecturer?.id);

  return (
    <ScheduleGrid>
      <ScheduleWrapper
        schedule={data}
        baseComponent={LecturerScheduleItem}
        baseComponentExtended={LecturerScheduleItemExtended}
      />
    </ScheduleGrid>
  );
};
