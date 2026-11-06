import { Pair } from '@/models/pair';

import { ScheduleMatrixCell } from './schedule-matrix';

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
