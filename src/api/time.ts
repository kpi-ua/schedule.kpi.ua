import { CurrentTime } from '../models/CurrentTime';
import Http from './index';

export const getCurrentTime = (): Promise<CurrentTime> => {
  return Http.get('/time/current');
};

export const getTimeSlots = (): Promise<Record<string, string>> => {
  return Http.get('/schedule/lessons/slots');
};
