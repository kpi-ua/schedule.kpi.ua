import type { Metadata } from 'next';

import { getAllLecturersAction, getScheduleByLecturerAction } from '@/actions/lecturer.actions';
import { getSortedTimeSlotsAction } from '@/actions/lessons.actions';
import { getCurrentTimeAction } from '@/actions/time.actions';
import { LecturerScheduleItemExtended } from '@/app/(schedule)/_components/schedule-item-extended/lecturer-schedule-item-extended';
import { LecturerScheduleItem } from '@/app/(schedule)/_components/schedule-item/lecturer-schedule-item';
import { EmptyCover } from '@/components/empty-cover';
import { unwrapAction } from '@/lib/unwrapAction';

import ScheduleWrapper from '../_components/scchedule-wrapper';

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

  if (!schedule) {
    return <EmptyCover title="Виберіть викладача зі списку" />;
  }

  return (
    <ScheduleWrapper
      schedule={schedule}
      currentTime={currentTime}
      timeSlots={timeSlots}
      baseComponent={LecturerScheduleItem}
      baseComponentExtended={LecturerScheduleItemExtended}
    />
  );
}
