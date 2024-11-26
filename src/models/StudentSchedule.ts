import { Schedule } from './Schedule';
import { StudentPair } from './StudentPair';

export interface StudentSchedule extends Schedule<StudentPair> {
  groupCode: string;
}
