import GroupSearch from '../../../../components/GroupSearch';
import { unwrapAction } from '../../../../lib/unwrapAction';
import { getAllGroupsAction } from '../../../../actions/group.actions';

export default async function SessionScheduleSettings() {
  const groups = await unwrapAction(getAllGroupsAction());

  return <GroupSearch groups={groups} />;
}
