import { useQuery } from '@tanstack/react-query';

import { getScheduleByLecturerAction } from '../../actions/lecturer.actions';

export const useLecturerProfileQuery = (lecturerId: string | null) =>
  useQuery({
    queryKey: ['lecturerProfile', lecturerId],
    queryFn: () => (lecturerId ? getScheduleByLecturerAction({ lecturerId }) : undefined),
    enabled: !!lecturerId,
    staleTime: 'static',
  });
