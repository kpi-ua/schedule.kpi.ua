import { Pair } from './pair';
import { WeekSchedule } from './week-schedule';

export interface Schedule<T extends Pair> {
  scheduleFirstWeek: WeekSchedule<T>[];
  scheduleSecondWeek: WeekSchedule<T>[];
}
