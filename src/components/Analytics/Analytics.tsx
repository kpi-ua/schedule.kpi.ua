import { connection } from 'next/server';
import { GoogleAnalytics } from '@next/third-parties/google';

// Read at request time, not inlined at build (unlike NEXT_PUBLIC_*), so one image serves both environments.
export const Analytics = async () => {
  await connection();

  const googleAnalyticsId = process.env.GA_MEASUREMENT_ID;
  const isProduction = process.env.APP_ENV === 'production';

  if (!isProduction || !googleAnalyticsId) {
    return null;
  }

  return <GoogleAnalytics gaId={googleAnalyticsId} />;
};
