import { PairLocation } from './PairLocation';

export enum SubjectType {
  Lecture = 'lec',
  Lab = 'lab',
  Practice = 'prac',
}

export interface Pair {
  name: string;
  location?: PairLocation | null;
  tag: SubjectType;
  time: string;
  type: string;
  dates: string[];
}
