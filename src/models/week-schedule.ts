import { Pair } from './pair';

export interface WeekSchedule<T extends Pair> {
  day: string;
  pairs: T[];
}
