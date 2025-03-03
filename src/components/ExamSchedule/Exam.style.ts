import styled from 'styled-components';
import { Flex, media } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { ScheduleItemMixin } from '../../common/styles/styles';

export const Subject = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${getValueFromTheme('primaryFontColor')};
`;

const Property = styled(Flex)`
  position: relative;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: ${getValueFromTheme('primaryFontColor')};
  margin-top: 10px;
  align-items: center;
`;

export const Teacher = styled(Property)`
  gap: 4px;
`;

export const Location = styled(Property)`
  gap: 7px;
`;
export const GroupName = styled(Property)`
  gap: 7px;
`;
export const ScheduleItemHeader = styled(Flex)`
  gap: 25px;
  align-items: center;
`;

export const ScheduleItemCurrent = styled.span`
  position: relative;
  font-weight: bold;
  color: #25cf9c;

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

export const CardWrapper = styled.div<{ $pastEvent?: boolean }>`
  ${ScheduleItemMixin};
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  max-width: 700px;
  gap: 16px;

  opacity: ${(props) => props.$pastEvent && '0.5'};

  ${media.extraSmallMode} {
    flex-direction: column-reverse;
  }
`;

export const CardMainData = styled.div`
  margin-left: 16px;
`;

export const DateWrapper = styled(Flex)`
  border-left: 1px solid ${getValueFromTheme('neutralDivider')};
  padding-left: 2rem;

  ${media.extraSmallMode} {
    border: none;
    padding-left: 0;
  }
`;

export const CardDate = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-self: center;
  color: ${getValueFromTheme('basicBlack')};
`;

export const Divider = styled.div`
  border-right: 1px solid ${getValueFromTheme('neutralDivider')};
  margin-right: 2rem;
`;

export const DividerRed = styled.div`
  border-radius: 99px;
  border-right: 4px solid red;
`;

export const Year = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
`;

export const Date = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin: 1px 0px 6px 0px;
`;

export const DaysLeft = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;
