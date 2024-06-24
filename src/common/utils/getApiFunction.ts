import { routes } from '../constants/routes';
import { getScheduleByGroup, getScheduleByLecturer, getExamsByGroup } from '@/api/schedule';
import { getAllGroups, getAllLecturers } from '@/api/fullList';

export const getScheduleApiFunction = (route: string) => {
  const functions = {
    [routes.GROUP]: getScheduleByGroup,
    [routes.SESSION]: getExamsByGroup,
    [routes.LECTURER]: getScheduleByLecturer,
  };

  return functions[route];
}

export const getListApiFunction = (route: string) => {
  const functions = {
    [routes.GROUP]: getAllGroups,
    [routes.SESSION]: getAllGroups,
    [routes.LECTURER]: getAllLecturers,
  };

  return functions[route];
}