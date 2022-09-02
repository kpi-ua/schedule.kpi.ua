import styled from 'styled-components';
import { getValueFromTheme } from 'common/utils/getValueFromTheme';
import { Flex, media } from 'common/styles/styles';

export const NavBarWrapper = styled.header`
  padding: 16px 70px 48px;
  background: ${getValueFromTheme('bgHeader')};

  ${media.smallMode} {
    padding: 16px 5px 48px;
  }
`;

export const NavbarInner = styled(Flex)`
  ${media.smallMode} {
    flex-direction: column;
    align-items: center;
  }
`;