import Http from './index';

export const getScheduleByLecturer = lecturerId => {
  return Http.get('/lecturer?lecturerId=' + lecturerId)
    .then(res => res.data);
}

export const getScheduleByGroup = groupId => {
  return Http.get('/group?groupId=' + groupId)
    .then(res => res.data);
}