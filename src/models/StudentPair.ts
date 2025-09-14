import { EntityWithNameAndId } from './EntityWithNameAndId';
import { Pair } from './Pair';

export interface StudentPair extends Pair {
  lecturer: EntityWithNameAndId;
}
