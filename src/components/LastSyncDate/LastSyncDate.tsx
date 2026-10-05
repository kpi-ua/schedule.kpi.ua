'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { GroupSyncDate } from '../../models/GroupSyncDate';

export const LastSyncDate = () => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('groupId');
  const [data, setData] = useState<GroupSyncDate>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!groupId) {
      setData(undefined);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    fetch(`/api/schedule/status?groupId=${groupId}`)
      .then((response) => response.json())
      .then((rows: GroupSyncDate[]) => {
        if (!cancelled) {
          setData(rows[0]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [groupId]);

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
