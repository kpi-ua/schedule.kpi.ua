import qs from 'qs';
import { entries, map, sortBy } from 'lodash-es';
import { campusGet } from './client';
import { buildCacheKey, withCache } from './cache';
import type { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import type { Group } from '../../models/Group';
import type { LecturerSchedule } from '../../models/LecturerSchedule';
import type { StudentSchedule } from '../../models/StudentSchedule';
import type { Exam } from '../../models/Exam';
import type { GroupSyncDate } from '../../models/GroupSyncDate';
import type { CurrentTime } from '../../models/CurrentTime';

export const getAllLecturers = (): Promise<EntityWithNameAndId[]> =>
  withCache(buildCacheKey('/schedule/lecturer/list'), () => campusGet('/schedule/lecturer/list'));

export const getAllGroups = (): Promise<Group[]> =>
  withCache(buildCacheKey('/group/all'), async () => {
    const response = await campusGet<Group[]>('/group/all');

    return response.map((row) => {
      const name = row.name.trim();
      const faculty = row.faculty?.trim();

      return { ...row, name: faculty ? `${name} (${faculty})` : name };
    });
  });

export const getScheduleByLecturer = (lecturerId: string): Promise<LecturerSchedule> =>
  withCache(buildCacheKey('/schedule/lecturer', { lecturerId }), () =>
    campusGet(`/schedule/lecturer?${qs.stringify({ lecturerId })}`),
  );

export const getScheduleByGroup = (groupId: string): Promise<StudentSchedule> =>
  withCache(buildCacheKey('/schedule/lessons', { groupId }), () =>
    campusGet(`/schedule/lessons?${qs.stringify({ groupId })}`),
  );

export const getExamsByGroup = (groupId: string): Promise<Exam[]> =>
  withCache(buildCacheKey('/schedule/exams/group', { groupId }), () =>
    campusGet(`/schedule/exams/group?${qs.stringify({ groupId })}`),
  );

export const getLastSyncDate = (groupId?: string): Promise<GroupSyncDate[]> =>
  withCache(buildCacheKey('/schedule/status', { groupId }), () =>
    campusGet(`/schedule/status?${qs.stringify({ groupId })}`),
  );

export const getCurrentTime = (): Promise<CurrentTime> =>
  withCache(buildCacheKey('/time/current'), () => campusGet('/time/current'));

export const getTimeSlots = (): Promise<Record<string, string>> =>
  withCache(buildCacheKey('/schedule/lessons/slots'), () => campusGet('/schedule/lessons/slots'));

// Time slots ordered by slot number, matching the shape consumed by generateScheduleMatrix.
export const getSortedTimeSlots = async (): Promise<string[]> => {
  const timeSlots = await getTimeSlots();

  return map(
    sortBy(entries(timeSlots), ([key]) => parseInt(key, 10)),
    ([, timeSlot]) => timeSlot,
  );
};
