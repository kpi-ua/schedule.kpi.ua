'use server';

import qs from 'qs';
import { z } from 'zod';

import { campusGet } from '@/lib/campusApi/client';
import { CACHE_TTL_HALF_AN_HOUR } from '@/lib/constants/common';
import { actionClient } from '@/lib/safeAction';
import { entityIdPatterns } from '@/lib/utils/entity-id.utils';
import { Exam } from '@/models/Exam';

const schema = z.object({ groupId: z.string().regex(entityIdPatterns.groupId) });

export const getExamsByGroupAction = actionClient
  .metadata({ actionName: 'getExamsByGroup' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { groupId } }) =>
    campusGet<Exam[]>(`/schedule/exams/group?${qs.stringify({ groupId })}`, {
      next: { revalidate: CACHE_TTL_HALF_AN_HOUR },
    }),
  );
