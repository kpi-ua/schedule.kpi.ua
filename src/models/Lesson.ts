import { Pair } from './Pair';
import { Schedule } from './Schedule';

export interface Lesson<T extends Pair> {
  groupCode: string;
  scheduleFirstWeek: Schedule<T>[];
  scheduleSecondWeek: Schedule<T>[];
}