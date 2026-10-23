'use server';

import { z } from 'zod';

import { getExamsByGroup } from '../lib/campusApi/endpoints';
import { actionClient } from '../lib/safeAction';

const schema = z.object({ groupId: z.string().min(1) });

export const getExamsByGroupAction = actionClient
  .metadata({ actionName: 'getExamsByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) => getExamsByGroup(groupId));
