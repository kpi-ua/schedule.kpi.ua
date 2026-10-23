import { useCallback, useEffect, useState } from 'react';

import { ScreenSize } from '../../types/ScreenSize';

export const SCREEN_SIZES: Record<ScreenSize, string> = {
  [ScreenSize.Big]: '1536px',
  [ScreenSize.Medium]: '1535px',
  [ScreenSize.Small]: '1023px',
  [ScreenSize.ExtraSmall]: '639px',
};

const screenSizes = Object.values(ScreenSize);

export const useScreenSize = () => {
  const detectScreenSize = () => {
    if (typeof window === 'undefined') {
      return ScreenSize.Big;
    }

    for (const size of screenSizes) {
      if (window.innerWidth <= parseInt(SCREEN_SIZES[size])) {
        return size;
      }
    }

    return ScreenSize.Big;
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(detectScreenSize());

  const updateScreenSize = useCallback(() => setScreenSize(detectScreenSize()), []);

  useEffect(() => {
    // Corrects the SSR-guessed size (window is unavailable on the server) right after mount.
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, [updateScreenSize]);

  return { screenSize };
};
