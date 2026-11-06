import { EntityWithNameAndId } from './entity-with-name-and-id';

export interface Group extends EntityWithNameAndId {
  faculty: string;
}
