import { DefaultMenu } from './DefaultMenu';
import LogoIcon from '../../../assets/logo.svg?react';
import { MobileMenu } from './MobileMenu';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const AboutHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  return (
    <header ref={headerRef} className="flex items-center justify-between py-7">
      <a className="w-[130px]" href="/">
        <LogoIcon className="max-h-10 w-full max-w-[116px] 2xl:max-h-16 2xl:max-w-[185px]" />
      </a>
      <DefaultMenu pathname={pathname} />
      <MobileMenu pathname={pathname} anchor={headerRef} />
    </header>
  );
};
