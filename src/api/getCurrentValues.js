import Http from './index';

export const getCurrentValues = () => {
  return Http.get('https://schedule.kpi.ua/api/time/current')
    .then(res => res.data);
}