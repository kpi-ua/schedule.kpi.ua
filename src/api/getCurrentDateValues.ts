import Http from './index';

export const getCurrentDateValues = () => {
  return Http.get('/time/current')
    .then(res => res.data);
};