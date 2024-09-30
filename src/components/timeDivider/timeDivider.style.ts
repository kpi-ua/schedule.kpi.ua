import styled from 'styled-components';
import { Flex, media } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const Container = styled.div`
  position: relative;
  align-self: start;
  grid-column: 1 / -1;
`;

export const InnerContainer = styled(Flex)`
  left: -90px;
  right: 0;
  top: -17px;
  position: absolute;
  align-items: center;

  ${media.extraSmallMode} {
    top: -13px;
    left: -65px;
  }
`;

export const TimeCell = styled.div`
  padding: 8px 11px;
  background-color: ${getValueFromTheme('brand600')};;
  border-radius: 999px;
  color: ${getValueFromTheme('invertedFontColor')};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.extraSmallMode} {
    padding: 3px 5px;
  }
`;

export const Divider = styled.div`
  border-top: 1px;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  border-style: dashed;
  border-color: ${getValueFromTheme('neutral400')};
  width: 100%;
`;