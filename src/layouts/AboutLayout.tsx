import styled, { css } from 'styled-components';

import { AboutHeader } from '../containers/About/AboutHeader';
import Footer from '../components/Footer';
import { getValueFromTheme } from '../common/utils/getValueFromTheme';
import { media } from '../common/styles/styles';

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${getValueFromTheme('bgPrimary')};
  min-height: 100vh;
`;

const FlexContainerMixin = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderExtender = styled.section`
  ${FlexContainerMixin}
  box-shadow: 0 3px 2px -2px ${getValueFromTheme('shadowColor')};
`;

const FooterExtender = styled.section`
  ${FlexContainerMixin}
  background-color: ${getValueFromTheme('brand900')};
`;

const LimitedWidthContainer = styled.section<{ width: number }>`
  display: flex;
  max-width: ${props => props.width}px;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 36px;

  ${media.extraSmallMode} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const FooterLimitedWidthContainer = styled(LimitedWidthContainer)`
  ${media.extraSmallMode} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const AboutLayout = ({ children }: AboutLayoutProps) => (
  <AboutPageWrapper>
    <HeaderExtender>
      <LimitedWidthContainer width={1280}>
        <AboutHeader />
      </LimitedWidthContainer>
    </HeaderExtender>
    <LimitedWidthContainer width={1280}>
      {children}
    </LimitedWidthContainer>
    <FooterExtender>
      <FooterLimitedWidthContainer  width={1280}>
        <Footer />
      </FooterLimitedWidthContainer>
    </FooterExtender>
  </AboutPageWrapper>
);
