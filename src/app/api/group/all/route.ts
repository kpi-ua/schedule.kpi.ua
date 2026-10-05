import { NextResponse } from 'next/server';
import { getAllGroups } from '../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../lib/apiRoute';

export const GET = withApiLogging('/api/group/all', async () => {
  const groups = await getAllGroups();
  return NextResponse.json(groups);
});
