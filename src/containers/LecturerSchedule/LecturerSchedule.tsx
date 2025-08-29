import { GridWrapper } from '../ScheduleWrapper/ScheduleWrapper.style';
import ScheduleWrapper from '../ScheduleWrapper';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { useStore } from '../../store';
import LecturerScheduleItem from '../ScheduleItem/LecturerScheduleItem';
import LecturerScheduleItemExtended from '../ScheduleItemExtended/LecturerScheduleItemExtended';

export const LecturerSchedule = () => {
  const lecturer = useStore((state) => state.lecturer);
  const { data } = useLecturerSchedule(lecturer?.id);

  return (
    <GridWrapper>
      <ScheduleWrapper
        schedule={data}
        baseComponent={LecturerScheduleItem}
        baseComponentExtended={LecturerScheduleItemExtended}
      />
    </GridWrapper>
  );
};
