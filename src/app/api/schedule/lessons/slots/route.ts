import { NextResponse } from 'next/server';
import { getTimeSlots } from '../../../../../lib/campusApi/endpoints';
import { withApiLogging } from '../../../../../lib/apiRoute';

export const GET = withApiLogging('/api/schedule/lessons/slots', async () => {
  const slots = await getTimeSlots();
  return NextResponse.json(slots);
});
