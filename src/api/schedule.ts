import { Exam } from '../models/Exam';
import { GroupSyncDate } from '../models/GroupSyncDate';
import Http from './index';
import { LecturerSchedule } from '../models/LecturerSchedule';
import { PagedResponse } from '../models/PagedResponse';
import { StudentSchedule } from '../models/StudentSchedule';
import qs from 'qs';

export const getScheduleByLecturer = (lecturerId: string): Promise<LecturerSchedule> => {
  const query = qs.stringify({ lecturerId });

  return Http.get(`/schedule/lecturer?${query}`);
};

export const getScheduleByGroup = (groupId: string): Promise<StudentSchedule> => {
  const query = qs.stringify({ groupId });
  return Http.get(`/schedule/lessons?${query}`);
};

export const getExamsByGroup = (groupId: string): Promise<Exam[]> => {
  const query = qs.stringify({ groupId });
  return Http.get(`/schedule/exams/group?${query}`);
};

export const getLastSyncDate = (groupId?: string): Promise<GroupSyncDate[]> => {
  const query = qs.stringify({ groupId });

  return Http.get(`/schedule/status?${query}`);
};
