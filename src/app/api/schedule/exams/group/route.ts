import { NextResponse } from 'next/server';
import { getExamsByGroup } from '../../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../../lib/apiRoute';

export const GET = withApiLogging('/api/schedule/exams/group', async (request) => {
  const groupId = request.nextUrl.searchParams.get('groupId');

  if (!groupId) {
    return NextResponse.json({ error: 'groupId is required' }, { status: 400 });
  }

  const exams = await getExamsByGroup(groupId);
  return NextResponse.json(exams);
});
