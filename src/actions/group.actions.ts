'use server';

import { campusGet } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { Group } from '@/models/Group';

export const getAllGroupsAction = actionClient.metadata({ actionName: 'getAllGroups' }).action(async () => {
  const response = await campusGet<Group[]>('/group/all', {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

  return response.map((row) => {
    const name = row.name.trim();
    const faculty = row.faculty?.trim();

    return { ...row, name: faculty ? `${name} (${faculty})` : name };
  });
});
