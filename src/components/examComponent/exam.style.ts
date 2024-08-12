import styled from "styled-components";
import { Flex } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { ScheduleItemMixin } from '../../common/styles/styles';

export const Subject = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${getValueFromTheme("primaryFontColor")};
  margin-top: 13px;
`;

const Property = styled(Flex)`
  position: relative;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: ${getValueFromTheme("primaryFontColor")};
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
    content: "";
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

export const CardWrapper = styled.div`
  ${ScheduleItemMixin};
  margin: 40px auto 0;
  padding: 16px 36px 16px 16px;
  display: flex;
  justify-content: space-between;
  max-width: 706px;
`;

export const CardMainData = styled.div`
  margin-left: 16px;
`;

export const CardDate = styled.div`
  align-self: center;
  min-width: 150px;
  color: ${getValueFromTheme('primaryFontColor')};
`;

export const Divider = styled.div`
  border-right: 1px solid grey;
  margin-right: 2rem;
`;

export const DividerRed = styled.div`
  border-right: 5px solid red;
`;
