import { Pair } from '../models/Pair';
import { ScheduleMatrixCell } from './ScheduleMatrix';

interface ScheduleItemProps<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
}

interface ExtendedScheduleItemProps<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>[];
}

export interface ScheduleComponentsProps<T extends Pair> {
  baseComponent: React.ComponentType<ScheduleItemProps<T>>;
  baseComponentExtended: React.ComponentType<ExtendedScheduleItemProps<T>>;
}
