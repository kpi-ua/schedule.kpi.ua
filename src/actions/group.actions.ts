'use server';

import { campusFetch } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { Group } from '@/models/group';

export const getAllGroupsAction = actionClient.metadata({ actionName: 'getAllGroups' }).action(async () => {
  const response = await campusFetch<Group[]>('/group/all', {
    next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
  });

  if (!response.ok) {
    throw new Error(`Error fetching groups list: ${response.status}`);
  }

  const data = await response.json();

  return data.map((row) => {
    const name = row.name.trim();
    const faculty = row.faculty?.trim();

    return { ...row, name: faculty ? `${name} (${faculty})` : name };
  });
});
