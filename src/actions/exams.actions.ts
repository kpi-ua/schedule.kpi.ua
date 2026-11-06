'use server';

import qs from 'qs';
import { z } from 'zod';

import { campusFetch } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { Exam } from '@/models/exam';

const schema = z.object({ groupId: z.string().min(1) });

export const getExamsByGroupAction = actionClient
  .metadata({ actionName: 'getExamsByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) => {
    const response = await campusFetch<Exam[]>(`/schedule/exams/group?${qs.stringify({ groupId })}`, {
      next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
    });

    if (!response.ok) {
      throw new Error(`Error fetching exams by group: ${response.status}`);
    }

    return response.json();
  });
