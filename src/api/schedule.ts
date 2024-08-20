import { Exam } from '../models/Exam';
import { LecturerLesson } from '../models/LecturerLesson';
import { PagedResponse } from '../models/PagedResponse';
import { StudentLesson } from '../models/StudentLesson';
import Http from './index';

export const getScheduleByLecturer = (lecturerId: string): Promise<PagedResponse<LecturerLesson[]>> => {
  return Http.get('/schedule/lecturer?lecturerId=' + lecturerId)
    .then(res => res.data);
}

export const getScheduleByGroup = (groupId: string): Promise<PagedResponse<StudentLesson[]>> => {
  return Http.get('/schedule/lessons?groupId=' + groupId)
    .then(res => res.data);
}

export const getExamsByGroup = (groupName: string): Promise<PagedResponse<Exam[]>> => {
  return Http.get('/exams/group?groupId=' + groupName)
    .then(res => res.data);
}