import { Pair } from '@/models/pair';
import { ScheduleMatrixCell } from '@/types/schedule-matrix';

export interface ScheduleItemProps<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
}
