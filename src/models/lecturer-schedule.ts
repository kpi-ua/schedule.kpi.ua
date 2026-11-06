import { LecturerPair } from './lecturer-pair';
import { LecturerProfile } from './lecturer-profile';
import { Schedule } from './schedule';

export interface LecturerSchedule extends Schedule<LecturerPair> {
  profile?: LecturerProfile;
}
