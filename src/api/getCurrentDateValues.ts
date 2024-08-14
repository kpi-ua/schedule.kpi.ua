import { CurrentTime } from '../models/CurrentTime';
import { PagedResponse } from '../models/PagedResponse';
import Http from './index';

export const getCurrentDateValues = (): Promise<PagedResponse<CurrentTime>> => {
  return Http.get('/time/current').then(res => res.data);
};