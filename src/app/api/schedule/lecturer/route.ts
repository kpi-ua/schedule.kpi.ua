import { NextResponse } from 'next/server';
import { getScheduleByLecturer } from '../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../lib/apiRoute';

export const GET = withApiLogging('/api/schedule/lecturer', async (request) => {
  const lecturerId = request.nextUrl.searchParams.get('lecturerId');

  if (!lecturerId) {
    return NextResponse.json({ error: 'lecturerId is required' }, { status: 400 });
  }

  const schedule = await getScheduleByLecturer(lecturerId);
  return NextResponse.json(schedule);
});
