'use server';

import { entries, map, sortBy } from 'lodash-es';
import queryString from 'query-string';
import { z } from 'zod';

import { campusGet } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR, CACHE_TTL_TIME_SLOTS } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { StudentSchedule } from '@/models/StudentSchedule';

const schema = z.object({ groupId: z.string().min(1) });

export const getScheduleByGroupAction = actionClient
  .metadata({ actionName: 'getScheduleByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) =>
    campusGet<StudentSchedule>(`/schedule/lessons?${queryString.stringify({ groupId })}`, {
      next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
    }),
  );

export const getSortedTimeSlotsAction = actionClient.metadata({ actionName: 'getSortedTimeSlots' }).action(async () => {
  const timeSlots = await campusGet<Record<string, string>>('/schedule/lessons/slots', {
    next: { revalidate: CACHE_TTL_TIME_SLOTS },
  });

  return map(
    sortBy(entries(timeSlots), ([key]) => parseInt(key, 10)),
    ([, timeSlot]) => timeSlot,
  );
});
