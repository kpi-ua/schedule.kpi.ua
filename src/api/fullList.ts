import { Group } from '../models/Group';
import { Lecturer } from '../models/Lecturer';
import Http from './index';

export const getAllLecturers = (): Promise<Lecturer[]> => {
  return Http.get('/schedule/lecturer/list');
};

export const getAllGroups = async (): Promise<Group[]> => {
  const response = await Http.get('/schedule/groups');

  return response.map((row) => ({
    ...row,
    name: `${row.name.trim()} (${row.faculty.trim()})`,
    id: row.id,
  }));
};
