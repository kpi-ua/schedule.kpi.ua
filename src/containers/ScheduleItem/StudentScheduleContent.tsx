import { StudentPair } from '../../models/StudentPair';
import { ScheduleItemProps } from './types';
import ScheduleItemBase from './ScheduleItemBase';
import PairLocationProperty from './PairLocationProperty';
import { IrregularSchedulesTable } from './IrregularSchedulesTable';
import LecturerProperty from './LecturerProperty';
import { MYKPI_URL } from '../../common/constants/config';
import { useStore } from '../../store';
import { Property } from './Property';

const StudentScheduleContent = <T extends StudentPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  const groupId = useStore((state) => state.group?.id);
  const {
    pair: { lecturer, location, dates },
  } = scheduleMatrixCell;
  const needsSourceSchedule = !lecturer && !location && dates.length > 0 && groupId && /^\d+$/.test(groupId);

  return (
    <ScheduleItemBase scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed}>
      {lecturer && <LecturerProperty lecturer={lecturer} />}
      {location && <PairLocationProperty location={location} />}
      {!!dates.length && <IrregularSchedulesTable dates={dates} />}
      {needsSourceSchedule && (
        <Property>
          <a
            href={`${MYKPI_URL}/room/teacher/groupcalendar?id=${encodeURIComponent(groupId)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Відкрити розклад групи в MyKPI
          </a>
        </Property>
      )}
    </ScheduleItemBase>
  );
};

export default StudentScheduleContent;
