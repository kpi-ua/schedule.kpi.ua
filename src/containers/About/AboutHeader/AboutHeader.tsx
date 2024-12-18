import { DefaultMenu } from './DefaultMenu';
import { Logo } from '../../../common/styles/styles';
import { MobileMenu } from './MobileMenu';
import logo from '../../../assets/logo.svg';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0px;
`;

const LogoWrapper = styled.a`
  width: 130px;
`;

export const AboutHeader = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  return (
    <HeaderWrapper ref={headerRef}>
      <LogoWrapper href="/">
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <DefaultMenu pathname={pathname} />
      <MobileMenu pathname={pathname} anchor={headerRef} />
    </HeaderWrapper>
  );
};
