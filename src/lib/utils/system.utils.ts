import { Week } from '@/types/week';

export const convertServerTimeToWeek = (serverWeek?: number): Week => {
  return serverWeek === 1 ? 'firstWeek' : 'secondWeek';
};
