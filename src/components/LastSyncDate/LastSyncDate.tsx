import dayjs from 'dayjs';
import { useLastSyncDate } from '../../queries/useLastSyncDate';
import { useStore } from '../../store';

export const LastSyncDate = () => {
  const group = useStore((state) => state.group);
  const { data, isLoading } = useLastSyncDate(group?.id);

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
