import { SUBJECT_TYPES } from '../../common/constants/subjectTypes';
import { Pair } from '../../models/Pair';

import styled from 'styled-components';
import { Flex } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import SubjectTypeBadge from '../../components/SubjectTypeBadge';
import { ScheduleMatrixCell } from '../../types/ScheduleMatrix';

const Subject = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${getValueFromTheme('primaryFontColor')};
  margin-top: 12px;
`;

const ScheduleItemHeader = styled(Flex)`
  gap: 25px;
  align-items: center;
  justify-content: space-between;
`;

const ScheduleItemCurrent = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 12px;
  color: #25cf9c;
  text-transform: uppercase;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -13px;
    display: block;
    background-color: #25cf9c;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }
`;

const CollapsedItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

interface Props<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
  children: React.ReactNode;
}

const ScheduleItemBase = <T extends Pair>({ scheduleMatrixCell, collapsed, children }: Props<T>) => {
  const {
    pair: { name, tag, dates },
  } = scheduleMatrixCell;

  return (
    <>
      <ScheduleItemHeader>
        <SubjectTypeBadge type={tag} dates={dates}>
          {SUBJECT_TYPES[tag]}
        </SubjectTypeBadge>
        {scheduleMatrixCell.currentPair && <ScheduleItemCurrent>Зараз</ScheduleItemCurrent>}
      </ScheduleItemHeader>
      <Subject>{name}</Subject>
      {!collapsed && <CollapsedItemsWrapper>{children}</CollapsedItemsWrapper>}
    </>
  );
};

export default ScheduleItemBase;
