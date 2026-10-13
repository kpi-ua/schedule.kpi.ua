import { GoogleAnalytics } from '@next/third-parties/google';

export const Analytics = () => {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

  if (!isProduction || !googleAnalyticsId) {
    return null;
  }

  return <GoogleAnalytics gaId={googleAnalyticsId} />;
};
