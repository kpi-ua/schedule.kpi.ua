import { EntityWithNameAndId } from './EntityWithNameAndId';

export interface Group extends EntityWithNameAndId {
  faculty: string;
}
