import { LecturerPair } from './LecturerPair';
import { LecturerProfile } from './LecturerProfile';
import { Schedule } from './Schedule';

export interface LecturerSchedule extends Schedule<LecturerPair> {
  profile?: LecturerProfile;
}
