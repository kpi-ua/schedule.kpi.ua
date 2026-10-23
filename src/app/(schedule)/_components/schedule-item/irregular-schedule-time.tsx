'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { useIsClient } from '@/lib/hooks/use-is-client';

dayjs.extend(localizedFormat);
dayjs.locale('uk');

export const IrregularScheduleTime = ({ date }: { date: string }) => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return <time>{dayjs(date).format('DD MMM YYYY')}</time>;
};
