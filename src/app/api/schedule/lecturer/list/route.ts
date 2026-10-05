import { NextResponse } from 'next/server';
import { getAllLecturers } from '../../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../../lib/apiRoute';

export const GET = withApiLogging('/api/schedule/lecturer/list', async () => {
  const lecturers = await getAllLecturers();
  return NextResponse.json(lecturers);
});
