'use server';

import { campusFetch } from '@/lib/campusApi/client';
import { actionClient } from '@/lib/safeAction';
import { CurrentTime } from '@/models/current-time';

export const getCurrentTimeAction = actionClient.metadata({ actionName: 'getCurrentTime' }).action(async () => {
  const response = await campusFetch<CurrentTime>('/time/current', { cache: 'no-cache' });

  if (!response.ok) {
    throw new Error(`Error fetching current time: ${response.status}`);
  }

  return response.json();
});
