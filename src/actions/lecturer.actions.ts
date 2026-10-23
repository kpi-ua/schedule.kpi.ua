'use server';

import { z } from 'zod';

import { getAllLecturers, getScheduleByLecturer } from '../lib/campusApi/endpoints';
import { actionClient } from '../lib/safeAction';

export const getAllLecturersAction = actionClient
  .metadata({ actionName: 'getAllLecturers' })
  .action(async () => getAllLecturers());

const schema = z.object({ lecturerId: z.string().min(1) });

export const getScheduleByLecturerAction = actionClient
  .metadata({ actionName: 'getScheduleByLecturer' })
  .inputSchema(schema)
  .action(async ({ parsedInput: { lecturerId } }) => getScheduleByLecturer(lecturerId));
