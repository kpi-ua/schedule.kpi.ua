import { useMemo } from 'react';
import ScheduleItemExtended from './ScheduleItemExtended';
import { StudentPair } from '../../models/StudentPair';
import { ExtendedScheduleItemProps } from './types';
import StudentScheduleContent from '../ScheduleItem/StudentScheduleContent';

const StudentScheduleItemExtended = <T extends StudentPair>({ scheduleMatrixCell }: ExtendedScheduleItemProps<T>) => {
  const hasData = useMemo(() => {
    const emptyEntries = scheduleMatrixCell.filter((x) => !x.pair.lecturer && !x.pair.location && !x.pair.dates.length);

    return emptyEntries.length !== scheduleMatrixCell.length;
  }, [scheduleMatrixCell]);

  return (
    <ScheduleItemExtended
      scheduleMatrixCell={scheduleMatrixCell}
      childComponent={StudentScheduleContent}
      hasData={hasData}
    />
  );
};

export default StudentScheduleItemExtended;
