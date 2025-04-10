import { Group } from '../models/Group';
import { Lecturer } from '../models/Lecturer';
import Http from './index';

export const getAllLecturers = (): Promise<Lecturer[]> => {
  return Http.get('/schedule/lecturer/list');
};

export const getAllGroups = async (): Promise<Group[]> => {
  const groups: Group[] = await Http.get('/schedule/groups');

  return groups.map((row) => ({
    ...row,
    name: `${row.name.trim()} (${row.faculty.trim()})`,
  }));
};
