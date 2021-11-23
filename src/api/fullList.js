import Http from './index';

export const getAllLecturers = () => {
  return Http.get('/lecturer/list')
    .then(({data}) => data);
}