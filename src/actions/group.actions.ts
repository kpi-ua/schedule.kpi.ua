'use server';

import { actionClient } from '../lib/safeAction';
import { getAllGroups } from '../lib/campusApi/endpoints';

export const getAllGroupsAction = actionClient
  .metadata({ actionName: 'getAllGroups' })
  .action(async () => getAllGroups());
