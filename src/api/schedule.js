import Http from './index';

export const getScheduleByLecturer = lecturerId => {
  return Http.get('/schedule/lecturer?lecturerId=' + lecturerId)
    .then(res => res.data);
}

export const getScheduleByGroup = groupId => {
  return Http.get('/schedule/lessons?groupId=' + groupId)
    .then(res => res.data);
}

export const getExamsByGroup = groupName => {
  return Http.get('/exams/group?groupId=' + groupName)
    .then(res => res.data);
}