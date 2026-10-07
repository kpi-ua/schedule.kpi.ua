import ScheduleWrapper, { ScheduleGrid } from '../ScheduleWrapper/ScheduleWrapper';
import { useStudentSchedule } from '../../queries/useStudentSchedule';
import { useStore } from '../../store';
import StudentScheduleItem from '../ScheduleItem/StudentScheduleItem';
import StudentScheduleItemExtended from '../ScheduleItemExtended/StudentScheduleItemExtended';
import { useMemo } from 'react';
import { hasDatedOns, supplementOnsSchedule } from '../../common/utils/onsSchedule';
import { useOnsOccurrences } from '../../queries/useOnsOccurrences';

export const GroupSchedule = () => {
  const group = useStore((state) => state.group);
  // Campus returns numeric IDs despite the existing Group model declaring strings.
  const groupId = group ? String(group.id) : undefined;
  const { data } = useStudentSchedule(groupId);
  const { data: occurrences } = useOnsOccurrences(groupId, hasDatedOns(data));
  const schedule = useMemo(() => (data ? supplementOnsSchedule(data, occurrences) : undefined), [data, occurrences]);

  return (
    <ScheduleGrid>
      <ScheduleWrapper
        schedule={schedule}
        baseComponent={StudentScheduleItem}
        baseComponentExtended={StudentScheduleItemExtended}
      />
    </ScheduleGrid>
  );
};
