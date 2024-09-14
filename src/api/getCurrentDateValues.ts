import { CurrentTime } from '../models/CurrentTime';
import { PagedResponse } from '../models/PagedResponse';
import Http from './index';

export const getCurrentDateValues = async (): Promise<PagedResponse<CurrentTime>> => {
  return await Http.get('/time/current');
};
