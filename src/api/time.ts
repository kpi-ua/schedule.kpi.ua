import { CurrentTime } from '../models/CurrentTime';
import Http from './index';

export const getCurrentTime = (): Promise<CurrentTime> => {
  return Http.get<CurrentTime>('/time/current');
};

export const getTimeSlots = (): Promise<Record<string, string>> => {
  return Http.get<Record<string, string>>('/schedule/lessons/slots');
};
