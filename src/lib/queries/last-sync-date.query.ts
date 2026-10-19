import { useQuery } from '@tanstack/react-query';
import { getLastSyncDateAction } from '../../actions/status.actions';
import { CACHE_TTL_HALF_AN_HOUR } from '../constants/common';

export const useLastSyncDateQuery = (groupId: string | null) =>
  useQuery({
    queryKey: ['lastSyncDate', groupId],
    queryFn: () => (groupId ? getLastSyncDateAction({ groupId }) : undefined),
    // Same as update time of a schedule, but in ms
    staleTime: CACHE_TTL_HALF_AN_HOUR * 1000,
    enabled: !!groupId,
  });
