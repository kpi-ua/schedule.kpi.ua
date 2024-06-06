export const getSelectCustomStyle = (theme: any) => ({
  option(base: any) {
    return {
      ...base,
      color: theme['primaryFontColor'],
    };
  },
  menu(base: any) {
    return {
      ...base,
      "& .fast-option-focused": {
        color: theme['hoveredOptionFontColor'],
      },
      "& .fast-option-selected": {
        color: theme['secondaryFontColor'],
        fontWeight: "bold"
        // background color can be also changed if needed
      },
      backgroundColor: theme['bgOptions'],
      zIndex: 1000,
    };
  },
  menuList(base: any) {
    return {
      ...base,
      backgroundColor: theme['bgOptions'],
      zIndex: 1000,
    };
  },
  control(base: any) {
    return {
      ...base,
      backgroundColor: theme['bgOptions'],
      color: theme['primaryFontColor'],
      border: 'none',
    };
  },
  indicatorSeparator(base: any) {
    return {
      ...base,
      display: 'none'
    };
  },
  singleValue(base: any) {
    return {
      ...base,
      color: theme['primaryFontColor'],
    };
  },
  input(base: any) {
    return {
      ...base,
      color: theme['primaryFontColor'],
    };
  }
});