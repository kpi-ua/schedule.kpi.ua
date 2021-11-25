import Http from './index';

export const getAllLecturers = () => {
  return Http.get('/lecturer/list')
    .then(({data}) => data);
}

export const getAllGroups = () => {
  return Http.get('/groups')
    .then(({data}) => data);
}