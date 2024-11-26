import { Pair } from './Pair';

export interface WeekSchedule<T extends Pair> {
  day: string;
  pairs: T[];
}
