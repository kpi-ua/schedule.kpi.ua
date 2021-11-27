import Http from './index';

export const getScheduleByLecturer = lecturerId => {
  return Http.get('/lecturer?lecturerId=' + lecturerId)
    .then(res => res.data);
}

export const getScheduleByGroup = groupName => {
  return Http.get('/lessons?groupName=' + groupName)
    .then(res => res.data);
}