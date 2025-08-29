import { Group } from './Group';
import { Pair } from './Pair';

export interface LecturerPair extends Pair {
  groups: Group[];
}
