'use client';

import { Fragment, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
