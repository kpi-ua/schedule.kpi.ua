import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { filterFutureDates } from '../../common/utils/dateFilters';

interface IrregularSchedulesTableProps {
  dates: string[];
}

const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${getValueFromTheme('neutral100')};
  background-color: ${getValueFromTheme('neutral50')};
  color: ${getValueFromTheme('primaryFontColor')};
  font-size: 13px;
`;

const Header = styled.span`
  font-weight: 600;
`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  height: 1px;
  background: ${getValueFromTheme('neutral100')};
  margin: 8px 0px;
`;

const DatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
`;

type EventPeriod = 'current' | 'future';

const EVENT_PERIODS: Record<EventPeriod, string> = {
  current: 'сьогодні',
  future: 'наступне',
};

const DateListItem = styled.div<{ $period: EventPeriod }>`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.4;

  ${(props) =>
    props.$period === 'current' &&
    css`
      opacity: 1;
    `}
`;

const getDatePeriod = (date: string): EventPeriod => {
  if (dayjs().isBefore(date, 'date')) {
    return 'future';
  }

  return 'current';
};

const sortByDates = (dates: string[]) => dates.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());

export const IrregularSchedulesTable = ({ dates }: IrregularSchedulesTableProps) => {
  const sortedFutureDates = useMemo(() => sortByDates(filterFutureDates(dates)), [dates]);

  return (
    <Wrapper>
      <Header>Розклад спец. занять</Header>
      <Divider />
      <DatesList>
        {sortedFutureDates.map((date) => {
          const period = getDatePeriod(date);
          return (
            <DateListItem $period={period} key={date}>
              <time>{dayjs(date).format('DD MMM YYYY')}</time>
              <span>{EVENT_PERIODS[period]}</span>
            </DateListItem>
          );
        })}
      </DatesList>
    </Wrapper>
  );
};
