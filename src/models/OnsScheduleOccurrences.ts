import type { EntityWithNameAndId } from './EntityWithNameAndId';
import type { PairLocation } from './PairLocation';

export interface OnsOccurrence {
  id: number;
  name: string;
  tag: 'lec';
  date: string;
  time: string;
  endTime: string;
  lecturers: EntityWithNameAndId[];
  location: PairLocation | null;
}

export interface OnsScheduleOccurrences {
  groupId: string;
  academicYear: number;
  occurrences: OnsOccurrence[];
}
