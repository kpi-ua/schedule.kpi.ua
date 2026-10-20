'use server';

import { z } from 'zod';
import { actionClient } from '../lib/safeAction';
import { getExamsByGroup } from '../lib/campusApi/endpoints';

const schema = z.object({ groupId: z.string().min(1) });

export const getExamsByGroupAction = actionClient
  .metadata({ actionName: 'getExamsByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) => getExamsByGroup(groupId));
