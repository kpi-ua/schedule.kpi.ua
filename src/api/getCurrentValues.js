import Http from './index';

export const getCurrentValues = () => {
  return Http.get('/time/current')
    .then(res => res.data);
}
