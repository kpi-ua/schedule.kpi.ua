import styled from 'styled-components';
import { Flex, media } from 'common/styles/styles';
import { getValueFromTheme } from 'common/utils/getValueFromTheme';

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

  ${media.extraSmallMode} {
    left: -44px;
  }
`;

export const TimeCell = styled.div`
  width: 64px;
  height: 36px;
  background: ${getValueFromTheme('primaryFontColor')};
  border-radius: 42px;
  color: ${getValueFromTheme('secondaryFontColor')};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.extraSmallMode} {
    background: none;
    color: ${getValueFromTheme('primaryFontColor')}
  }
`;

export const Divider = styled.div`
  border-top: 1px dashed ${getValueFromTheme('primaryFontColor')};
  width: 100%;
`;