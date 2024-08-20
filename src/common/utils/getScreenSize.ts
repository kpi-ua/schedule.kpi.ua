import { ScreenSize } from '../../types/ScreenSize';

const SCRREN_SIZES: Record<ScreenSize, string> = {
  [ScreenSize.Big]: '1441px',
  [ScreenSize.Medium]: '1440px',
  [ScreenSize.Small]: '988px',
  [ScreenSize.ExtraSmall]: '639px',
};

export const getScreenSize = (mode: ScreenSize) => {
  return SCRREN_SIZES[mode];
}