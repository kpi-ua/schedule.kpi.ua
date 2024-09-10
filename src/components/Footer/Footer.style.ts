import styled from 'styled-components';
import { media, Pictogram } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: start;
  background-color: ${getValueFromTheme('brand900')};
  padding: 36px;
  color: #ffffff;
  gap: 40px;
  font-size: 12px;

  ${media.extraSmallMode} {
    display: none;
  }
`;

export const FooterLogo = styled(Pictogram)`
  flex-basis: 120px;
`;

export const FooterSection = styled.section`
  flex-basis: 260px;

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;