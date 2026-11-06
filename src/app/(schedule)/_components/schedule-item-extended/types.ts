import { Pair } from '@/models/pair';
import { ScheduleMatrixCell } from '@/types/schedule-matrix';

export interface ExtendedScheduleItemProps<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>[];
}
