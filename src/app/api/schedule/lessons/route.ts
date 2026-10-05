import { NextResponse } from 'next/server';
import { getScheduleByGroup } from '../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../lib/apiRoute';

export const GET = withApiLogging('/api/schedule/lessons', async (request) => {
  const groupId = request.nextUrl.searchParams.get('groupId');

  if (!groupId) {
    return NextResponse.json({ error: 'groupId is required' }, { status: 400 });
  }

  const schedule = await getScheduleByGroup(groupId);
  return NextResponse.json(schedule);
});
