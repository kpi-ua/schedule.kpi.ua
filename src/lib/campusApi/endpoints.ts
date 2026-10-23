import { entries, map, sortBy } from 'lodash-es';
import qs from 'qs';

import type { CurrentTime } from '../../models/CurrentTime';
import type { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import type { Exam } from '../../models/Exam';
import type { Group } from '../../models/Group';
import type { LecturerSchedule } from '../../models/LecturerSchedule';
import type { StudentSchedule } from '../../models/StudentSchedule';
import { CACHE_TTL_HALF_AN_HOUR, CACHE_TTL_TIME_SLOTS } from '../constants/common';
import { campusGet } from './client';

export const getAllLecturers = (): Promise<EntityWithNameAndId[]> =>
  campusGet('/schedule/lecturer/list', { next: { revalidate: CACHE_TTL_HALF_AN_HOUR } });

export const getAllGroups = async (): Promise<Group[]> => {
  const response = await campusGet<Group[]>('/group/all', {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

  return response.map((row) => {
    const name = row.name.trim();
    const faculty = row.faculty?.trim();

    return { ...row, name: faculty ? `${name} (${faculty})` : name };
  });
};

export const getScheduleByLecturer = (lecturerId: string): Promise<LecturerSchedule> =>
  campusGet(`/schedule/lecturer?${qs.stringify({ lecturerId })}`, {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

export const getScheduleByGroup = (groupId: string): Promise<StudentSchedule> =>
  campusGet(`/schedule/lessons?${qs.stringify({ groupId })}`, {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

export const getExamsByGroup = (groupId: string): Promise<Exam[]> =>
  campusGet(`/schedule/exams/group?${qs.stringify({ groupId })}`, {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

export const getCurrentTime = (): Promise<CurrentTime> => campusGet('/time/current', { cache: 'no-cache' });

export const getTimeSlots = (): Promise<Record<string, string>> =>
  campusGet('/schedule/lessons/slots', { next: { revalidate: CACHE_TTL_TIME_SLOTS } });

// Time slots ordered by slot number, matching the shape consumed by generateScheduleMatrix.
export const getSortedTimeSlots = async (): Promise<string[]> => {
  const timeSlots = await getTimeSlots();

  return map(
    sortBy(entries(timeSlots), ([key]) => parseInt(key, 10)),
    ([, timeSlot]) => timeSlot,
  );
};
