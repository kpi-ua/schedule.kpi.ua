import { Exam } from '../models/Exam';
import Http from './index';
import { LecturerSchedule } from '../models/LecturerSchedule';
import { PagedResponse } from '../models/PagedResponse';
import { StudentSchedule } from '../models/StudentSchedule';

export const getScheduleByLecturer = (lecturerId: string): Promise<PagedResponse<LecturerSchedule>> => {
  return Http.get('/schedule/lecturer?lecturerId=' + lecturerId);
}

export const getScheduleByGroup = (groupId: string): Promise<PagedResponse<StudentSchedule>> => {
  return Http.get('/schedule/lessons?groupId=' + groupId);
}

export const getExamsByGroup = (groupName: string): Promise<PagedResponse<Exam[]>> => {
  return Http.get('/exams/group?groupId=' + groupName);
}
