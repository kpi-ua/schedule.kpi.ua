import { useMemo } from 'react';
import ScheduleItemExtended from './ScheduleItemExtended';
import { LecturerPair } from '../../models/LecturerPair';
import { ExtendedScheduleItemProps } from './types';
import LecturerScheduleContent from '../ScheduleItem/LecturerScheduleContent';

const LecturerScheduleItemExtended = <T extends LecturerPair>({ scheduleMatrixCell }: ExtendedScheduleItemProps<T>) => {
  const hasData = useMemo(() => {
    const emptyEntries = scheduleMatrixCell.filter((x) => !x.pair.location && !x.pair.groups && !x.pair.dates.length);

    return emptyEntries.length !== scheduleMatrixCell.length;
  }, [scheduleMatrixCell]);

  return (
    <ScheduleItemExtended
      scheduleMatrixCell={scheduleMatrixCell}
      childComponent={LecturerScheduleContent}
      hasData={hasData}
    />
  );
};

export default LecturerScheduleItemExtended;
