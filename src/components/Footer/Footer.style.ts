import { Pictogram, media } from '../../common/styles/styles';

import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: start;
  background-color: ${getValueFromTheme('brand900')};
  padding: 36px;
  color: #ffffff;
  gap: 40px;
  font-size: 12px;
  width: 100%;

  ${media.extraSmallMode} {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 16px;
  }
`;

export const FooterLogo = styled(Pictogram)`
  flex-basis: 120px;

  ${media.extraSmallMode} {
    flex-basis: auto;
  }
`;

export const FooterSection = styled.section`
  flex-basis: 260px;

  ${media.extraSmallMode} {
    flex-basis: auto;
    text-align: center;
  }

  a {
    color: ${getValueFromTheme('invertedFontColor')};
  }

  a:hover {
    color: ${getValueFromTheme('invertedFontColor')};
  }

  a:active {
    color: ${getValueFromTheme('invertedFontColor')};
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
