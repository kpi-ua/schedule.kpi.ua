import { ScreenSize } from '../../types/ScreenSize';
import { useCallback, useEffect, useState } from "react";
import { SCREEN_SIZES } from '../constants/screenSize';

export const useScreenSize = () => {
  const detectScreenSize = () => {
    for (let key in ScreenSize) {
      if (window.innerWidth <= parseInt(SCREEN_SIZES[ScreenSize[key]])) {
        return ScreenSize[key];
      }
    }

    return ScreenSize.Big;
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(detectScreenSize());

  const updateScreenSize = useCallback(() => setScreenSize(detectScreenSize()), []);

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, [updateScreenSize]);


  return { screenSize };
};
