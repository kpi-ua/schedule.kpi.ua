import { useQuery } from 'react-query';
import { Lecturer } from '../../models/Lecturer';
import { getAllGroups, getAllLecturers } from '../../api/fullList';
import { Group } from '../../models/Group';

export const usePreloadedList = () => {
  const { data: groups = [], isLoading: groupsLoading } = useQuery<Group[]>({
    queryKey: 'groups',
    queryFn: () => {
      return getAllGroups();
    },
  });

  const { data: lecturers = [], isLoading: lecturersLoading } = useQuery<Lecturer[]>({
    queryKey: 'lecturers',
    queryFn: () => {
      return getAllLecturers();
    },
  });

  return { groups, lecturers, isLoading: groupsLoading || lecturersLoading };
};
