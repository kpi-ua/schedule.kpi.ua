import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import dayjs from 'dayjs';

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

type EventPeriod = 'past' | 'current' | 'future';

const EVENT_PERIODS: Record<EventPeriod, string> = {
  past: 'минуле',
  current: 'сьогодні',
  future: 'наступне',
};

const DateListItem = styled.div<{ $period: EventPeriod }>`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  opacity: 0.4;

  ${(props) =>
    props.$period === 'past' &&
    css`
      &:first-child time {
        text-decoration: line-through;
      }
    `}

  ${(props) =>
    props.$period === 'current' &&
    css`
      opacity: 1;
    `}
`;

const getDatePeriod = (date: string): EventPeriod => {
  if (dayjs().isAfter(date, 'date')) {
    return 'past';
  }

  if (dayjs().isBefore(date, 'date')) {
    return 'future';
  }

  return 'current';
};

export const IrregularSchedulesTable = ({ dates }: IrregularSchedulesTableProps) => {
  return (
    <Wrapper>
      <Header>Розклад спец. занять</Header>
      <Divider />
      <DatesList>
        {dates.map((date) => {
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
