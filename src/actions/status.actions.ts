'use server';

import { z } from 'zod';
import { actionClient } from '../lib/safeAction';
import { getLastSyncDate } from '../lib/campusApi/endpoints';

const schema = z.object({ groupId: z.string().min(1) });

export const getLastSyncDateAction = actionClient
  .metadata({ actionName: 'getLastSyncDate' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) => {
    const rows = await getLastSyncDate(groupId);
    return rows[0] ?? null;
  });
