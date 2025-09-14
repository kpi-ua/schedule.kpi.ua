import { Theme } from '../../types/Theme';

export const theme: Record<Theme, object> = {
  light: {
    bgPrimary: '#ffffff',
    bgHeader: '#ffffff',
    bgTable: 'rgba(255, 255, 255, 0.5)',
    bgCard: 'rgba(255, 255, 255, 0.9)',
    bgOptions: '#eff0f8',
    borderColor: '#008acf',
    shadowColor: '#eaeaea',

    main: '#f9f9ff',

    basicBlack: '#000000',
    basicBlue: '#1062a3',
    basicWhite: '#ffffff',
    basicGrey: '#bbbbbb',

    brand900: '#004571',
    brand800: '#00548b',
    brand700: '#0061a0',
    brand600: '#006db3',
    brand500: '#7296c5',
    brand400: '#a1b6d5',
    brand300: '#c6d1e4',
    brand200: '#e4e9f2',
    brand100: '#f2f4f8',
    brand00: '#f5fbff',

    neutralDivider: '#e5e7ef',
    neutral900: '#40414d',
    neutral800: '#545564',
    neutral700: '#6a6b7a',
    neutral600: '#808191',
    neutral500: '#9797a8',
    neutral400: '#afb0be',
    neutral300: '#c7c8d5',
    neutral200: '#e1e1ec',
    neutral100: '#eeeef7',
    neutral50: '#f8f8ff',

    statusDanger300: '#f83b51',
    statusDanger200: '#ff94a0',
    statusDanger100: '#ffebee',
    statusWarning300: '#f4b001',
    statusWarning200: '#fbdb64',
    statusWarning100: '#fdf6ca',
    statusSuccess300: '#2ac167',
    statusSuccess200: '#a2ffc7',
    statusSuccess100: '#eefff5',

    otherPurple: '#949dff',
    otherPurple10: 'rgba(148, 157, 255, 0.1)',
    otherRed: '#ff7f96',
    otherRed10: 'rgba(255, 127, 150, 0.1)',
    otherOrange: '#f6b382',
    otherOrange10: 'rgba(246, 179, 130, 0.1)',
    otherBlue: '#7fb2ff',
    otherBlue10: 'rgba(127, 178, 255, 0.1)',

    primaryFontColor: '#14366c',
    secondaryFontColor: '#000000',
    invertedFontColor: '#fff',
    currentDayContainer: 'linear-gradient(180deg, rgba(238,238,247,1) 0%, rgba(238,238,247,0.5) 100%);',
    svgPrimaryFilter: '',
  }
};
