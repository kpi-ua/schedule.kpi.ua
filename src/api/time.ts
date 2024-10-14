import { CurrentTime } from '../models/CurrentTime';
import Http from './index';
import { PagedResponse } from '../models/PagedResponse';

export const getCurrentTime = (): Promise<PagedResponse<CurrentTime>> => {
  return Http.get('/time/current');
};
