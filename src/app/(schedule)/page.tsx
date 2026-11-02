import type { Metadata } from 'next';

import { getAllGroupsAction } from '@/actions/group.actions';
import { getScheduleByGroupAction, getSortedTimeSlotsAction } from '@/actions/lessons.actions';
import { getCurrentTimeAction } from '@/actions/time.actions';
import { StudentScheduleItemExtended } from '@/app/(schedule)/_components/schedule-item-extended/student-schedule-item-extended';
import { StudentScheduleItem } from '@/app/(schedule)/_components/schedule-item/student-schedule-item';
import { EmptyCover } from '@/components/empty-cover';
import { unwrapAction } from '@/lib/unwrapAction';

import ScheduleWrapper from './_components/scchedule-wrapper';

interface PageProps {
  searchParams: Promise<{ groupId?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { groupId } = await searchParams;

  const group = groupId
    ? (await unwrapAction(getAllGroupsAction())).find(({ id }) => String(id) === groupId)
    : undefined;

  const title = group
    ? `Розклад занять групи ${group.name} | Розклад КПІ`
    : 'Розклад занять | Розклад КПІ ім. Ігоря Сікорського';
  const description = group
    ? `Розклад занять для групи ${group.name} на поточний тиждень.`
    : 'Розклад занять. Розклад сесії. Розклад для викладачів.';

  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
  };
}

export default async function GroupSchedulePage({ searchParams }: PageProps) {
  const { groupId } = await searchParams;

  if (!groupId) {
    return <EmptyCover />;
  }

  const [schedule, currentTime, timeSlots] = await Promise.all([
    groupId ? unwrapAction(getScheduleByGroupAction({ groupId })) : undefined,
    unwrapAction(getCurrentTimeAction()),
    unwrapAction(getSortedTimeSlotsAction()),
  ]);

  if (!schedule) {
    return <EmptyCover />;
  }

  return (
    <ScheduleWrapper
      schedule={schedule}
      currentTime={currentTime}
      timeSlots={timeSlots}
      baseComponent={StudentScheduleItem}
      baseComponentExtended={StudentScheduleItemExtended}
    />
  );
}
