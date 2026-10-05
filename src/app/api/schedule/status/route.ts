import { NextResponse } from 'next/server';
import { getLastSyncDate } from '../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../lib/apiRoute';

export const GET = withApiLogging('/api/schedule/status', async (request) => {
  const groupId = request.nextUrl.searchParams.get('groupId') ?? undefined;
  const status = await getLastSyncDate(groupId);
  return NextResponse.json(status);
});
