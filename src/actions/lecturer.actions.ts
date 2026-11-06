'use server';

import queryString from 'query-string';
import { z } from 'zod';

import { campusFetch } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { EntityWithNameAndId } from '@/models/entity-with-name-and-id';
import { LecturerSchedule } from '@/models/lecturer-schedule';

export const getAllLecturersAction = actionClient.metadata({ actionName: 'getAllLecturers' }).action(async () => {
  const response = await campusFetch<EntityWithNameAndId[]>('/schedule/lecturer/list', {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

  if (!response.ok) {
    throw new Error(`Error fetching lecturers list: ${response.status}`);
  }

  return response.json();
});

const schema = z.object({ lecturerId: z.string().min(1) });

export const getScheduleByLecturerAction = actionClient
  .metadata({ actionName: 'getScheduleByLecturer' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { lecturerId } }) => {
    const response = await campusFetch<LecturerSchedule>(
      `/schedule/lecturer?${queryString.stringify({ lecturerId })}`,
      {
        next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
      },
    );

    if (!response.ok) {
      throw new Error(`Error fetching schedule by lecturer: ${response.status}`);
    }

    return response.json();
  });
