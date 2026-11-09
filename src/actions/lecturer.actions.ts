'use server';

import queryString from 'query-string';
import { z } from 'zod';

import { campusGet } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { entityIdPatterns } from '@/lib/utils/entity-id.utils';
import { EntityWithNameAndId } from '@/models/EntityWithNameAndId';
import { LecturerSchedule } from '@/models/LecturerSchedule';

export const getAllLecturersAction = actionClient
  .metadata({ actionName: 'getAllLecturers' })
  .action(async () =>
    campusGet<EntityWithNameAndId[]>('/schedule/lecturer/list', { next: { revalidate: CACHE_TTL_HALF_AN_HOUR } }),
  );

const schema = z.object({ lecturerId: z.string().regex(entityIdPatterns.lecturerId) });

export const getScheduleByLecturerAction = actionClient
  .metadata({ actionName: 'getScheduleByLecturer' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { lecturerId } }) =>
    campusGet<LecturerSchedule>(`/schedule/lecturer?${queryString.stringify({ lecturerId })}`, {
      next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
    }),
  );
