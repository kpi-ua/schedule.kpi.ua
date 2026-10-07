'use server';

import { z } from 'zod';
import { actionClient } from '../lib/safeAction';
import { getScheduleByGroup, getSortedTimeSlots } from '../lib/campusApi/endpoints';

const schema = z.object({ groupId: z.string().min(1) });

export const getScheduleByGroupAction = actionClient
  .metadata({ actionName: 'getScheduleByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) => getScheduleByGroup(groupId));

export const getSortedTimeSlotsAction = actionClient
  .metadata({ actionName: 'getSortedTimeSlots' })
  .action(async () => getSortedTimeSlots());
