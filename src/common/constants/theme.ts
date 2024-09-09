import { Theme } from '../../types/Theme';

export const theme: Record<Theme, Object> = {
  light: {
    bgPrimary: '#ffffff',
    bgHeader: '#ffffff',
    bgTable: 'rgba(255, 255, 255, 0.5)',
    bgCard: 'rgba(255, 255, 255, 0.9)',
    bgOptions: '#eff0f8',
    borderColor: '#008acf',
    shadowColor: '#eaeaea',
    brand600: '#006db3',
    brand900: '#004571',
    neutral100: '#eeeef7',
    primaryFontColor: '#14366C',
    secondaryFontColor: '#000000',
    invertedFontColor: '#fff',
    currentDayContainer: 'linear-gradient(180deg, rgba(238,238,247,1) 0%, rgba(238,238,247,0.5) 100%);',
    svgPrimaryFilter: '',
  },
  dark: {
    bgPrimary: 'linear-gradient(120.84deg, #0E0F12 -0.88%, #111316 100%)',
    bgHeader: 'linear-gradient(180deg, #1F2128 0%, rgba(31, 33, 40, 0.5) 100%)',
    bgTable: 'rgba(31, 33, 40, 0.5)',
    bgCard: 'rgba(31, 33, 40, 0.9)',
    bgOptions: '#363637',
    borderColor: '#008acf',
    shadowColor: '#eaeaea',
    brand600: '#006DB3',
    brand900: '#004571',
    neutral100: '#eeeef7',
    primaryFontColor: '#ffffff',
    secondaryFontColor: '#ffffff',
    invertedFontColor: '#21232a',
    currentDayContainer: 'linear-gradient(180deg, rgba(54, 54, 55, 0) 0%, rgba(54, 54, 55, 0.5) 10.73%, #363637 55%, rgba(54, 54, 55, 0.5) 89.9%, rgba(54, 54, 55, 0.29) 100%)',
    svgPrimaryFilter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(46deg) brightness(100%) contrast(103%)',
  }
};