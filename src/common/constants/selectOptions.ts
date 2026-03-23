import type { CSSObjectWithLabel } from 'react-select';
import type { DefaultTheme } from 'styled-components';

export const getSelectCustomStyle = (theme: DefaultTheme) => ({
  option(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
    };
  },
  menu(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
      '& .fast-option-focused': {
        color: theme['secondaryFontColor'],
      },
      '& .fast-option-selected': {
        color: theme['invertedFontColor'],
        fontWeight: 'bold',
        // background color can be also changed if needed
      },
      backgroundColor: theme['bgOptions'],
      zIndex: 1000,
    };
  },
  menuList(base: CSSObjectWithLabel) {
    return {
      ...base,
      backgroundColor: theme['bgOptions'],
      zIndex: 1000,
    };
  },
  control(base: CSSObjectWithLabel) {
    return {
      ...base,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme['neutral300'],
      backgroundColor: theme['bgPrimary'],
      color: theme['secondaryFontColor'],
      paddingTop: 2,
      paddingBottom: 2,
    };
  },
  indicatorSeparator(base: CSSObjectWithLabel) {
    return {
      ...base,
      display: 'none',
    };
  },
  singleValue(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
    };
  },
  input(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
    };
  },
});
