import { entries, map, sortBy } from 'lodash-es';
import { getTimeSlots } from '../api/time';
import { useQuery } from 'react-query';

export const getQueryKey = () => {
  return 'timeSlots';
};

export const useTimeSlots = () => {
  return useQuery({
    staleTime: 12 * 60 * 60 * 1000,
    queryKey: getQueryKey(),
    placeholderData: [],
    queryFn: async () => {
      const timeSlots = await getTimeSlots();

      return map(
        sortBy(entries(timeSlots), ([key]) => parseInt(key, 10)),
        ([, timeSlot]) => timeSlot,
      );
    },
    refetchOnWindowFocus: false,
  });
};
