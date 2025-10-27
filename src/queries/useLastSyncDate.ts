import { getLastSyncDate } from '../api/schedule';
import { useQuery } from 'react-query';

export const getQueryKey = (groupId?: string) => {
  return groupId ? ['lastSyncDate', groupId] : ['lastSyncDate'];
};

export const useLastSyncDate = (groupId?: string) => {
  return useQuery({
    queryKey: getQueryKey(groupId),
    queryFn: async () => {
      if (!groupId) {
        return undefined;
      }

      const [groupSyncDate] = await getLastSyncDate(groupId);

      return groupSyncDate;
    },
    refetchOnWindowFocus: false,
  });
};
