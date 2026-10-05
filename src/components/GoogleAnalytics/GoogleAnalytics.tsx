'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactGA from 'react-ga4';
import { GA_TRACKING_ID } from '../../common/constants/config';

const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isGAInitialized = useRef(false);

  useEffect(() => {
    if (GA_TRACKING_ID && !isGAInitialized.current) {
      ReactGA.initialize(GA_TRACKING_ID);
      isGAInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isGAInitialized.current) {
      return;
    }

    try {
      ReactGA.send({ hitType: 'pageview', page: `${pathname}?${searchParams.toString()}` });
    } catch (error) {
      console.error('Failed to send pageview to Google Analytics:', error);
    }
  }, [pathname, searchParams]);

  return null;
};

export default GoogleAnalytics;
