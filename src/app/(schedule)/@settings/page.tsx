import { getAllGroupsAction } from '@/actions/group.actions';
import { GroupSearch } from '@/components/group-search';
import { WeekSwitch } from '@/components/week-switch';
import { unwrapAction } from '@/lib/unwrapAction';

export default async function GroupScheduleSettings() {
  const groups = await unwrapAction(getAllGroupsAction());

  return (
    <>
      <GroupSearch groups={groups} />
      <WeekSwitch />
    </>
  );
}
