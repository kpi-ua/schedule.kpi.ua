'use server';

import { getCurrentTime } from '../lib/campusApi/endpoints';
import { actionClient } from '../lib/safeAction';

export const getCurrentTimeAction = actionClient
  .metadata({ actionName: 'getCurrentTime' })
  .action(async () => getCurrentTime());
