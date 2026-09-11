import { EntityWithNameAndId } from '../models/EntityWithNameAndId';
import { Group } from '../models/Group';
import Http from './index';

export const getAllLecturers = (): Promise<EntityWithNameAndId[]> => {
  return Http.get('/schedule/lecturer/list');
};

export const getAllGroups = async (): Promise<Group[]> => {
  const response = await Http.get<Group[]>('/group/all');

  return response.map((row) => {
    const name = row.name.trim();
    const faculty = row.faculty?.trim() ?? '';

    return {
      ...row,
      name: faculty ? `${name} (${faculty})` : name,
      id: row.id,
    };
  });
};
