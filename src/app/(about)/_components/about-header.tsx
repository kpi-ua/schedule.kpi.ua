'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import LogoIcon from '../../../assets/logo.svg?react';
import { DefaultMenu } from './default-menu';
import { MobileMenu } from './mobile-menu';

export const AboutHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  return (
    <header ref={headerRef} className="flex items-center justify-between py-7">
      <Link className="w-32.5" href="/">
        <LogoIcon className="max-h-10 w-full max-w-29 2xl:max-h-16 2xl:max-w-46.25" />
      </Link>
      <DefaultMenu pathname={pathname} />
      <MobileMenu pathname={pathname} anchor={headerRef} />
    </header>
  );
};
