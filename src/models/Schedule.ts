import { Pair } from './Pair';

export interface Schedule<T extends Pair> {
  day: string;
  pairs: T[];
}