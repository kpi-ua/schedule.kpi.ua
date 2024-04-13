import {MODES} from "@/common/constants/modes";
import {getModeSize} from "./getModeSize";
import { useEffect, useState } from 'react';

export const useCurrentMode = () => {
  const [currentMode, setCurrentMode] = useState(null);

  useEffect(() => {
    detectCurrentMode();
    window.addEventListener('resize', detectCurrentMode);

    return () => window.removeEventListener('resize', detectCurrentMode);
  }, []);

  const detectCurrentMode = () => {
    for (let key in MODES) {
      if (window.innerWidth <= parseInt(getModeSize(MODES[key]))) {
        setCurrentMode(MODES[key]);
        return;
      }
    }

    setCurrentMode(MODES.BIG);
  }

  return currentMode;
}