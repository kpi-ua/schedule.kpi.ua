import { Pair } from './Pair';

export interface StudentPair extends Pair {
  lecturerId: string;
  teacherName: string;
}