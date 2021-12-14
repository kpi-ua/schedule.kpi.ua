import styled from "styled-components";
import { Flex } from "../../common/styles/styles";
import { getValueFromTheme } from "../../common/utils/getValueFromTheme";

export const ScheduleItemType = styled.div`
  width: 84px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background-color: #949dff;
  border-radius: 8px;
  color: ${getValueFromTheme("secondaryFontColor")};
  font-weight: 600;
`;

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
  display: flex;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 40px;
`;

export const CardMainData = styled.div`
  display: block;
  margin: 20px;
`;

export const CardDate = styled.div`
  display: block;
  padding: 10px;
  h1 {
    padding: 0px;
  }
  h2 {
    padding: 0px;
  }
`;
export const Divider = styled.div`
  margin-top: 30px;
  margin-right: 15px;
  padding: 30px;
  border-right: 1px solid grey;
  height: 15px
  top: 50%;
`;

export const DividerRed = styled.div`
  margin-top: 30px;
  margin-right: 15px;
  padding: 30px;
  border-right: 5px solid red;
  height: 15px
  top: 50%;
`;
