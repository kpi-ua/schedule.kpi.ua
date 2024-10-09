import { Pair } from './Pair';
import { WeekSchedule } from './WeekSchedule';

export interface Schedule<T extends Pair> {
  scheduleFirstWeek: WeekSchedule<T>[];
  scheduleSecondWeek: WeekSchedule<T>[];
}