import { getScheduleByLecturer } from '../api/schedule';
import { useQuery } from 'react-query';

export const getQueryKey = (lecturerId?: string) => {
  return ['lecturerSchedule', lecturerId];
};

export const useLecturerSchedule = (lecturerId?: string) => {
  return useQuery({
    queryKey: getQueryKey(lecturerId),
    queryFn: () => (lecturerId ? getScheduleByLecturer(lecturerId) : undefined),
  });
};
