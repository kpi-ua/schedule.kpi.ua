import { Exam } from '../models/Exam';
import { LecturerLesson } from '../models/LecturerLesson';
import { PagedResponse } from '../models/PagedResponse';
import { StudentLesson } from '../models/StudentLesson';
import Http from './index';

export const getScheduleByLecturer = (lecturerId: string): Promise<PagedResponse<LecturerLesson[]>> => {
  return Http.get('/schedule/lecturer?lecturerId=' + lecturerId);
}

export const getScheduleByGroup = (groupId: string): Promise<PagedResponse<StudentLesson[]>> => {
  return Http.get('/schedule/lessons?groupId=' + groupId);
}

export const getExamsByGroup = (groupName: string): Promise<PagedResponse<Exam[]>> => {
  return Http.get('/exams/group?groupId=' + groupName);
}
