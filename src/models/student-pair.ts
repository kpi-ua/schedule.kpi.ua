import { EntityWithNameAndId } from './entity-with-name-and-id';
import { Pair } from './pair';

export interface StudentPair extends Pair {
  lecturer: EntityWithNameAndId;
}
