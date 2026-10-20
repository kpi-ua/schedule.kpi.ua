import { ScreenSize } from '../../types/ScreenSize';
import { useCallback, useEffect, useState } from 'react';
import { SCREEN_SIZES } from '../constants/screenSize';

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
