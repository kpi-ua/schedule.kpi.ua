import Http from './index';

export const getScheduleByLecturer = (lecturerId: string) => {
  return Http.get('/schedule/lecturer?lecturerId=' + lecturerId)
    .then(res => res.data);
}

export const getScheduleByGroup = (groupId: string) => {
  return Http.get('/schedule/lessons?groupId=' + groupId)
    .then(res => res.data);
}

export const getExamsByGroup = (groupName: string) => {
  return Http.get('/exams/group?groupId=' + groupName)
    .then(res => res.data);
}