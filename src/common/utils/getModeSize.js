import { MODES } from '../constants/modes';

export const getModeSize = MODE => {
  const MODE_SIZES = {
    [MODES.BIG]: '1441px',
    [MODES.MEDIUM]: '1440px',
    [MODES.SMALL]: '988px',
    [MODES.EXTRA_SMALL]: '639px',
  };

  return MODE_SIZES[MODE];
};