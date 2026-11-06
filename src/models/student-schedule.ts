import { Schedule } from './schedule';
import { StudentPair } from './student-pair';

export interface StudentSchedule extends Schedule<StudentPair> {
  groupCode: string;
}
