import { useQuery } from 'react-query';
import { getAllGroups, getAllLecturers } from '../../api/fullList';
import { Group } from '../../models/Group';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';

export const usePreloadedList = () => {
  const { data: groups = [], isLoading: groupsLoading } = useQuery<Group[]>({
    queryKey: 'groups',
    queryFn: () => {
      return getAllGroups();
    },
    refetchOnWindowFocus: false,
  });

  const { data: lecturers = [], isLoading: lecturersLoading } = useQuery<EntityWithNameAndId[]>({
    queryKey: 'lecturers',
    queryFn: () => {
      return getAllLecturers();
    },
    refetchOnWindowFocus: false,
  });

  return { groups, lecturers, isLoading: groupsLoading || lecturersLoading };
};
