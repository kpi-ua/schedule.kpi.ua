import { DefaultMenu } from './DefaultMenu';
import { Logo } from '../../../common/styles/styles';
import { MobileMenu } from './MobileMenu';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const AboutHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  return (
    <header ref={headerRef} className="flex items-center justify-between py-7">
      <a className="w-[130px]" href="/">
        <Logo />
      </a>
      <DefaultMenu pathname={pathname} />
      <MobileMenu pathname={pathname} anchor={headerRef} />
    </header>
  );
};
