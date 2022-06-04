import Http from "./index";

export const getAllLecturers = () => {
  return Http.get("/schedule/lecturer/list").then(({ data }) => data);
};

export const getAllGroups = () => {
  return Http.get("/schedule/groups").then(({ data }) => {
    return {
      data: data.data.map((row) => ({
        name: `${row.name.trim()} (${row.faculty.trim()})`,
      })),
    };
  }); // TODO concat group name with faculty name
};
