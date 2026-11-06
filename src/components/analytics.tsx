import { GoogleAnalytics } from '@next/third-parties/google';
import { connection } from 'next/server';

import { serverEnv } from '@/env/server-env';

// Read at request time, not inlined at build (unlike NEXT_PUBLIC_*), so one image serves both environments.
export const Analytics = async () => {
  await connection();

  const googleAnalyticsId = serverEnv.GA_MEASUREMENT_ID;
  const isProduction = serverEnv.APP_ENV === 'production';

  if (!isProduction || !googleAnalyticsId) {
    return null;
  }

  return <GoogleAnalytics gaId={googleAnalyticsId} />;
};
