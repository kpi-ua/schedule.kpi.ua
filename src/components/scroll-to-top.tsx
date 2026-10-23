'use client';

import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';

export const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};
