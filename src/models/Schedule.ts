import { Pair } from './Pair';

export interface Schedule<T extends Pair> {
  day: number;
  pairs: T[];
}