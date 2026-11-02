'use client';

import { useSearchParams } from 'next/navigation';

import { useEntitySearch } from '@/lib/hooks/use-entity-search';
import { Group } from '@/models/Group';

import { SearchSelect } from './search-select';

interface Props {
  groups: Group[];
}

export const GroupSearch = ({ groups }: Props) => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');
  const group = groups.find(({ id }) => String(id) === groupId);

  const { handleChange } = useEntitySearch('groupId');

  return <SearchSelect options={groups} value={group} onChange={(item) => handleChange(item.id)} />;
};
