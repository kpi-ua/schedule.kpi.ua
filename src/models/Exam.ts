export interface Exam {
  daysLeft: number;
  id: string;
  date: string;
  lecturerName: string;
  lecturerId: string;
  room: string;
  subjectShort: string;
  subject: string;
  group?: string;
  genericGroupId: string;
}