import { useQuery } from 'react-query';
import { getOnsOccurrences } from '../api/onsSchedule';
import { isNumericGroupId } from '../common/utils/onsSchedule';

export const useOnsOccurrences = (groupId?: string, enabled = false) =>
  useQuery({
    queryKey: ['onsOccurrences', groupId],
    queryFn: () => getOnsOccurrences(groupId!),
    enabled: enabled && isNumericGroupId(groupId),
    staleTime: 60_000,
    retry: 1,
  });
