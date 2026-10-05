import type { Metadata } from 'next';
import ScheduleWrapper, { ScheduleGrid } from '../../containers/ScheduleWrapper/ScheduleWrapper';
import StudentScheduleItem from '../../containers/ScheduleItem/StudentScheduleItem';
import StudentScheduleItemExtended from '../../containers/ScheduleItemExtended/StudentScheduleItemExtended';
import { getAllGroups, getCurrentTime, getScheduleByGroup, getSortedTimeSlots } from '../../lib/campusApi/endpoints';

interface PageProps {
  searchParams: Promise<{ groupId?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { groupId } = await searchParams;
  const group = groupId ? (await getAllGroups()).find(({ id }) => String(id) === groupId) : undefined;

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

  const [schedule, currentTime, timeSlots] = await Promise.all([
    groupId ? getScheduleByGroup(groupId) : undefined,
    getCurrentTime(),
    getSortedTimeSlots(),
  ]);

  return (
    <ScheduleGrid>
      <ScheduleWrapper
        schedule={schedule}
        currentTime={currentTime}
        timeSlots={timeSlots}
        baseComponent={StudentScheduleItem}
        baseComponentExtended={StudentScheduleItemExtended}
      />
    </ScheduleGrid>
  );
}
