import { Group } from './group';
import { Pair } from './pair';

export interface LecturerPair extends Pair {
  groups: Group[];
}
