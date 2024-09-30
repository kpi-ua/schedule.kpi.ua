import SearchSelect from '../SearchSelect';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { useGroupContext } from "../../common/context/groupContext";
import { usePreloadedListContext } from "../../common/context/preloadedListsContext";

const GroupSearch = () => {
  const { groups } = usePreloadedListContext();
  const groupContext = useGroupContext();
  const { handleChange } = useEntitySearch('groupId', groups, groupContext);

  return (
    <SearchSelect
      options={groups}
      value={groupContext.item}
      onChange={handleChange}
    />
  );
};

export default GroupSearch;
