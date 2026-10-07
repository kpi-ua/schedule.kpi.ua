'use server';

import { actionClient } from '../lib/safeAction';
import { getCurrentTime } from '../lib/campusApi/endpoints';

export const getCurrentTimeAction = actionClient
  .metadata({ actionName: 'getCurrentTime' })
  .action(async () => getCurrentTime());
