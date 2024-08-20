import { ScreenSize } from '../../types/ScreenSize';
import { useEffect, useState } from "react";
import { getScreenSize } from './getScreenSize';

export const useCurrentMode = () => {
  const [currentMode, setCurrentMode] = useState<string | null>(null);

  useEffect(() => {
    detectCurrentMode();
    window.addEventListener("resize", detectCurrentMode);

    return () => window.removeEventListener("resize", detectCurrentMode);
  }, []);

  const detectCurrentMode = () => {
    for (let key in ScreenSize) {
      if (window.innerWidth <= parseInt(getScreenSize(ScreenSize[key]))) {
        setCurrentMode(ScreenSize[key]);
        return;
      }
    }

    setCurrentMode(ScreenSize.Big);
  };

  return currentMode;
};
