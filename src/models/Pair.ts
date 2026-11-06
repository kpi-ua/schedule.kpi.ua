import { PairLocation } from './pair-location';

export enum SubjectType {
  Lecture = 'lec',
  Lab = 'lab',
  Practice = 'prac',
}

export interface Pair {
  name: string;
  location?: PairLocation;
  tag: SubjectType;
  time: string;
  type: string;
  dates: string[];
}
