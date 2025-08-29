import styled from 'styled-components';
import { Flex } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const Property = styled(Flex)`
  position: relative;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${getValueFromTheme('primaryFontColor')};
  align-items: center;
  display: flex;
  align-items: start;
  gap: 4px;
  flex-wrap: wrap;

  & > svg {
    margin-top: 1px;
    width: 16px;
    height: 16px;
  }
`;
