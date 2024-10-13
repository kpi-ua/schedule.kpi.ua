import dayjs from 'dayjs';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import styled from 'styled-components';
import { useGroupContext } from '../../common/context/groupContext';
import { useLastSyncDate } from '../../queries/useLastSyncDate';

const LastSyncDateWrapper = styled.div`
  color: ${getValueFromTheme('neutral600')};
  font-size: 12px;
  margin-top: 12px;
`;

export const LastSyncDate = () => {
  const { item: group } = useGroupContext();
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
    <LastSyncDateWrapper>
      <span>{renderValue()}</span>
    </LastSyncDateWrapper>
  );
};
