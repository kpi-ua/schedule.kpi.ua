import { Pair } from '../models/Pair';

export interface ScheduleMatrixCell<T extends Pair> {
  pair: T;
  currentPair: boolean;
}

export type UnknownScheduleMatrixCell<T extends Pair> = ScheduleMatrixCell<T> | ScheduleMatrixCell<T>[] | null;
export type ScheduleMatrixRow<T extends Pair> = UnknownScheduleMatrixCell<T>[];

export type ScheduleMatrix<T extends Pair> = ScheduleMatrixRow<T>[];
