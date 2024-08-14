export interface Pair {
  lecturerId: string;
  name: string;
  place: string;
  tag: string;
  teacherName: string;
  time: string;
  type: string;
  // TODO: Refactor this, group is available only for students
  group?: string;
}