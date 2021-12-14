import Http from './index';

export const getScheduleByLecturer = lecturerId => {
  return Http.get('/schedule/lecturer?lecturerId=' + lecturerId)
    .then(res => res.data);
}

export const getScheduleByGroup = groupName => {
  return Http.get('/schedule/lessons?groupName=' + groupName)
    .then(res => res.data);
}

export const getExamsByGroup = groupName => {
  return Http.get('/exams/group?groupName=' + groupName)
    .then(res => res.data);
}