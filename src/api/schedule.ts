import { Exam } from '../models/Exam';
import { LecturerLesson } from '../models/LecturerLesson';
import { PagedResponse } from '../models/PagedResponse';
import { StudentLesson } from '../models/StudentLesson';
import Http from './index';

export const getScheduleByLecturer = async (lecturerId: string): Promise<PagedResponse<LecturerLesson[]>> => {
  return await Http.get('/schedule/lecturer?lecturerId=' + lecturerId);
}

export const getScheduleByGroup = async (groupId: string): Promise<PagedResponse<StudentLesson[]>> => {
  return await Http.get('/schedule/lessons?groupId=' + groupId);
}

export const getExamsByGroup = async (groupName: string): Promise<PagedResponse<Exam[]>> => {
  return await Http.get('/exams/group?groupId=' + groupName);
}