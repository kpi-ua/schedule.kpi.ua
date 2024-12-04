import { getCurrentTime } from '../api/time';
import { useQuery } from 'react-query';

export const getQueryKey = () => {
  return 'currentTime';
};

export const useCurrentTime = () => {
  return useQuery({
    staleTime: 12 * 60 * 60 * 1000,
    queryKey: getQueryKey(),
    placeholderData: {
      data: {
        currentDay: 0,
        currentLesson: 0,
        currentWeek: 0,
      },
    },
    queryFn: getCurrentTime,
  });
};
