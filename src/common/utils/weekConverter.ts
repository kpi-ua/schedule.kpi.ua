import { Week } from '../../types/Week';

export const convertServerTimeToWeek = (serverWeek?: number): Week => {
  return serverWeek === 1 ? 'firstWeek' : 'secondWeek';
};
