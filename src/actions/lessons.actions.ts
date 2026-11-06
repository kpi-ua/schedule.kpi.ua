'use server';

import { entries, map, sortBy } from 'lodash-es';
import queryString from 'query-string';
import { z } from 'zod';

import { campusFetch } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR, CACHE_TTL_TIME_SLOTS } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { StudentSchedule } from '@/models/student-schedule';

const schema = z.object({ groupId: z.string().min(1) });

export const getScheduleByGroupAction = actionClient
  .metadata({ actionName: 'getScheduleByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) => {
    const response = await campusFetch<StudentSchedule>(`/schedule/lessons?${queryString.stringify({ groupId })}`, {
      next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
    });

    if (!response.ok) {
      throw new Error(`Error fetching schedule by group: ${response.status}`);
    }

    return response.json();
  });

export const getSortedTimeSlotsAction = actionClient.metadata({ actionName: 'getSortedTimeSlots' }).action(async () => {
  const response = await campusFetch<Record<string, string>>('/schedule/lessons/slots', {
    next: { revalidate: CACHE_TTL_TIME_SLOTS },
  });

  if (!response.ok) {
    throw new Error(`Error fetching time slots: ${response.status}`);
  }

  const timeSlots = await response.json();

  return map(
    sortBy(entries(timeSlots), ([key]) => parseInt(key, 10)),
    ([, timeSlot]) => timeSlot,
  );
});
