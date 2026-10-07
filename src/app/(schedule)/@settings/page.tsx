import GroupSearch from '../../../components/GroupSearch';
import WeekSwitch from '../../../components/WeekSwitch';
import { unwrapAction } from '../../../lib/unwrapAction';
import { getAllGroupsAction } from '../../../actions/group.actions';

export default async function GroupScheduleSettings() {
  const groups = await unwrapAction(getAllGroupsAction());

  return (
    <>
      <GroupSearch groups={groups} />
      <WeekSwitch />
    </>
  );
}
