import { routes } from '../constants/routes';
import { getScheduleByGroup, getScheduleByLecturer, getExamsByGroup } from '../../api/schedule';
import { getAllGroups, getAllLecturers } from '../../api/fullList';

const ROUTE_SCHEDULE_FUNCTION = {
  [routes.GROUP]: getScheduleByGroup,
  [routes.SESSION]: getExamsByGroup,
  [routes.LECTURER]: getScheduleByLecturer,
};

const ROUTE_LIST_FUNCTION = {
  [routes.GROUP]: getAllGroups,
  [routes.SESSION]: getAllGroups,
  [routes.LECTURER]: getAllLecturers,
};

export const getScheduleApiFunction = (route: string) => {
  return ROUTE_SCHEDULE_FUNCTION[route];
};

export const getListApiFunction = (route: string) => {
  return ROUTE_LIST_FUNCTION[route];
};