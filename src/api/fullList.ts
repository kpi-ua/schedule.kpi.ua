import { Group } from '../models/Group';
import { Lecturer } from '../models/Lecturer';
import { PagedResponse } from '../models/PagedResponse';
import Http from "./index";

export const getAllLecturers = async (): Promise<PagedResponse<Lecturer[]>> => {
  return await Http.get("/schedule/lecturer/list");
};

export const getAllGroups = async (): Promise<PagedResponse<Group[]>> => {
  const response = await Http.get("/schedule/groups");

  return {
    ...(response as PagedResponse<Group[]>),
    data: (response as PagedResponse<Group[]>).data.map(row => ({
      ...row,
      name: `${row.name.trim()} (${row.faculty.trim()})`,
      id: row.id,
    }))
  };
};
