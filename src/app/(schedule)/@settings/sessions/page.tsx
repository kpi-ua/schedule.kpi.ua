import { getAllGroupsAction } from '@/actions/group.actions';
import { GroupSearch } from '@/components/group-search';
import { unwrapAction } from '@/lib/unwrapAction';

export default async function SessionScheduleSettings() {
  const groups = await unwrapAction(getAllGroupsAction());

  return <GroupSearch groups={groups} />;
}
