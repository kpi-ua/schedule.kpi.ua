import { routes } from '../constants/routes';
import { getScheduleByGroup, getScheduleByLecturer } from '../../api/schedule';
import { getAllGroups, getAllLecturers } from '../../api/fullList';

export const getScheduleApiFunction = route => {
  const functions = {
    [routes.GROUP]: getScheduleByGroup,
    [routes.SESSION]: getScheduleByGroup,
    [routes.LECTURER]: getScheduleByLecturer,
  };

  return functions[route];
}

export const getListApiFunction = route => {
  const functions = {
    [routes.GROUP]: getAllGroups,
    [routes.SESSION]: getAllGroups,
    [routes.LECTURER]: getAllLecturers,
  };

  return functions[route];
}