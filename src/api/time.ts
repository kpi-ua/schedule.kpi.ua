import { CurrentTime } from '../models/CurrentTime';
import Http from './index';

export const getCurrentTime = (): Promise<CurrentTime> => {
  return Http.get('/time/current');
};
