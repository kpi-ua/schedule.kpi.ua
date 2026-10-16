'use client';

import { useSearchParams } from 'next/navigation';
import SearchSelect from '../SearchSelect';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { Group } from '../../models/Group';

interface Props {
  groups: Group[];
}

const GroupSearch = ({ groups }: Props) => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');
  const group = groups.find(({ id }) => String(id) === groupId);

  const { handleChange } = useEntitySearch('groupId');

  return <SearchSelect options={groups} value={group} onChange={(item) => handleChange(item.id)} />;
};

export default GroupSearch;
