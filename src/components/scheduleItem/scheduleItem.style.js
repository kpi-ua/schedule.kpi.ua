import styled from 'styled-components';
import { Flex } from '../../common/styles/styles';

export const ScheduleItemType = styled.div`
  width: 74px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background-color: #949dff;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
`;

export const Subject = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #141518;
  margin-top: 13px;
`;

const Property = styled(Flex)`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #141518;
  margin-top: 10px;
  align-items: center;
`;

export const Teacher = styled(Property)`
  gap: 4px;
`;

export const Location = styled(Property)`
  gap: 7px;
`;
