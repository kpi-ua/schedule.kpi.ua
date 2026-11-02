'use server';

import { campusGet } from '@/lib/campusApi/client';
import { actionClient } from '@/lib/safeAction';
import { CurrentTime } from '@/models/CurrentTime';

export const getCurrentTimeAction = actionClient
  .metadata({ actionName: 'getCurrentTime' })
  .action(async () => campusGet<CurrentTime>('/time/current', { cache: 'no-cache' }));
