import type { CSSObjectWithLabel } from 'react-select';

export const getSelectCustomStyle = () => ({
  option(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: '#000000',
      whiteSpace: 'nowrap' as const,
    };
  },
  menu(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: '#000000',
      '& .fast-option-focused': {
        color: '#000000',
      },
      '& .fast-option-selected': {
        color: '#ffffff',
        fontWeight: 'bold',
        // background color can be also changed if needed
      },
      backgroundColor: 'var(--color-bg-options)',
      zIndex: 1000,
    };
  },
  menuList(base: CSSObjectWithLabel) {
    return {
      ...base,
      backgroundColor: 'var(--color-bg-options)',
      zIndex: 1000,
    };
  },
  control(base: CSSObjectWithLabel) {
    return {
      ...base,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'var(--color-neutral-300)',
      backgroundColor: '#ffffff',
      color: '#000000',
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
      color: '#000000',
    };
  },
  input(base: CSSObjectWithLabel) {
    return {
      ...base,
      color: '#000000',
    };
  },
});
