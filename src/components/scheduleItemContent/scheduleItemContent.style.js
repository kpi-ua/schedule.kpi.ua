import styled from 'styled-components';
import { Flex } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const ScheduleItemType = styled.div`
  width: 84px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background-color: #949dff;
  border-radius: 8px;
  color: ${getValueFromTheme('secondaryFontColor')};
  font-weight: 600;
`;

export const Subject = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${getValueFromTheme('primaryFontColor')};
  margin-top: 13px;
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

export const ScheduleItemHeader = styled(Flex)`
  gap: 25px;
  align-items: center;
`;

export const ScheduleItemCurrent = styled.span`
  position: relative;
  font-weight: bold;
  color: #25CF9C;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -13px;
    display: block;
    background-color: #25CF9C;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }
`;