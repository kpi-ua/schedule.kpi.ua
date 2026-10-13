'use client';

import { useIsClient } from '@uidotdev/usehooks';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.locale('uk');

export const IrregularScheduleTime = ({ date }: { date: string }) => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return <time>{dayjs(date).format('DD MMM YYYY')}</time>;
};
