'use client';

import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useLastSyncDateQuery } from '../../lib/queries/last-sync-date.query';

export const LastSyncDate = () => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');

  const { data: lastSyncDate, isLoading, isFetching } = useLastSyncDateQuery(groupId);

  const renderValue = () => {
    if (isLoading || isFetching) {
      return 'Завантаження...';
    }

    if (!lastSyncDate?.data?.updated) {
      return 'Дата останнього оновлення невідома';
    }

    return (
      <>
        Оновлено <time>{dayjs(lastSyncDate?.data?.updated).format('DD.MM.YYYY')}</time>
      </>
    );
  };

  return (
    <div className="text-xs text-neutral-600">
      <span>{renderValue()}</span>
    </div>
  );
};
