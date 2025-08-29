import { Pair } from '../../models/Pair';
import { ScheduleMatrixCell } from '../../types/ScheduleMatrix';

export interface ScheduleItemProps<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
}
