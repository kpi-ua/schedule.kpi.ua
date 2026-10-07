import type { Metadata } from 'next';
import ScheduleWrapper, { ScheduleGrid } from '../../../containers/ScheduleWrapper/ScheduleWrapper';
import LecturerScheduleItem from '../../../containers/ScheduleItem/LecturerScheduleItem';
import LecturerScheduleItemExtended from '../../../containers/ScheduleItemExtended/LecturerScheduleItemExtended';
import { unwrapAction } from '../../../lib/unwrapAction';
import { getAllLecturersAction, getScheduleByLecturerAction } from '../../../actions/lecturer.actions';
import { getCurrentTimeAction } from '../../../actions/time.actions';
import { getSortedTimeSlotsAction } from '../../../actions/lessons.actions';

interface PageProps {
  searchParams: Promise<{ lecturerId?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { lecturerId } = await searchParams;
  const lecturer = lecturerId
    ? (await unwrapAction(getAllLecturersAction())).find(({ id }) => String(id) === lecturerId)
    : undefined;
  const schedule = lecturerId ? await unwrapAction(getScheduleByLecturerAction({ lecturerId })) : undefined;

  const title = lecturer
    ? `Розклад занять викладача ${lecturer.name} | Розклад КПІ`
    : 'Розклад для викладачів | Розклад КПІ ім. Ігоря Сікорського';
  const description = lecturer
    ? `Розклад занять викладача ${lecturer.name} на поточний тиждень.`
    : 'Розклад занять для викладачів КПІ ім. Ігоря Сікорського.';
  const photo = schedule?.profile?.photo;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      ...(photo ? { images: [{ url: photo }] } : {}),
    },
  };
}

export default async function LecturerSchedulePage({ searchParams }: PageProps) {
  const { lecturerId } = await searchParams;

  const [schedule, currentTime, timeSlots] = await Promise.all([
    lecturerId ? unwrapAction(getScheduleByLecturerAction({ lecturerId })) : undefined,
    unwrapAction(getCurrentTimeAction()),
    unwrapAction(getSortedTimeSlotsAction()),
  ]);

  return (
    <ScheduleGrid>
      <ScheduleWrapper
        schedule={schedule}
        currentTime={currentTime}
        timeSlots={timeSlots}
        baseComponent={LecturerScheduleItem}
        baseComponentExtended={LecturerScheduleItemExtended}
      />
    </ScheduleGrid>
  );
}
