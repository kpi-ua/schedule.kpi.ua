import { NextResponse } from 'next/server';
import { getCurrentTime } from '../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../lib/apiRoute';

export const GET = withApiLogging('/api/time/current', async () => {
  const currentTime = await getCurrentTime();
  return NextResponse.json(currentTime);
});
