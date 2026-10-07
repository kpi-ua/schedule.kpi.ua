'use client';

import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAction } from 'next-safe-action/hooks';
import { getLastSyncDateAction } from '../../actions/status.actions';

export const LastSyncDate = () => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');

  const { execute, input, result, isExecuting } = useAction(getLastSyncDateAction);

  useEffect(() => {
    if (groupId) {
      execute({ groupId });
    }
  }, [groupId, execute]);

  // Ignore a still-in-flight result for a group the user has already navigated away from.
  const data = input?.groupId === groupId ? result.data : undefined;
  const isLoading = isExecuting;

  const renderValue = () => {
    if (isLoading) {
      return 'Завантаження...';
    }

    if (!data?.updated) {
      return 'Дата останнього оновлення невідома';
    }

    return (
      <>
        Оновлено <time>{dayjs(data?.updated).format('DD.MM.YYYY')}</time>
      </>
    );
  };

  return (
    <div className="text-xs text-neutral-600">
      <span>{renderValue()}</span>
    </div>
  );
};
