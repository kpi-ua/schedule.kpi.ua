import { getScheduleByGroup } from '../api/schedule';
import { useQuery } from 'react-query';

export const getQueryKey = (groupId?: string) => {
  return ['studentSchedule', groupId];
};

export const useStudentSchedule = (groupId?: string) => {
  return useQuery({
    queryKey: getQueryKey(groupId),
    queryFn: () => (groupId ? getScheduleByGroup(groupId) : undefined),
  });
};
