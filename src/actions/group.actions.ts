'use server';

import { getAllGroups } from '../lib/campusApi/endpoints';
import { actionClient } from '../lib/safeAction';

export const getAllGroupsAction = actionClient
  .metadata({ actionName: 'getAllGroups' })
  .action(async () => getAllGroups());
