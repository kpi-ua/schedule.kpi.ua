import { Group } from '../models/Group';
import { Lecturer } from '../models/Lecturer';
import { PagedResponse } from '../models/PagedResponse';
import Http from "./index";

export const getAllLecturers = (): Promise<PagedResponse<Lecturer[]>> => {
  return Http.get("/schedule/lecturer/list").then(({ data }) => data);
};

export const getAllGroups = async (): Promise<PagedResponse<Group[]>> => {
  const response = await Http.get<PagedResponse<Group[]>>("/schedule/groups")

  return {
    ...response.data,
    data: response.data.data.map(row => ({
      ...row,
      name: `${row.name.trim()} (${row.faculty.trim()})`,
      id: row.id,
    }))
  };
};
