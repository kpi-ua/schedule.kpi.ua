export const getSelectCustomStyle = (theme) => ({
  option(base) {
    return {
      ...base,
      color: theme['primaryFontColor'],
    };
  },
  menu(base) {
    return {
      ...base,
      backgroundColor: theme['bgOptions'],
      zIndex: 1000,
    };
  },
  menuList(base) {
    return {
      ...base,
      backgroundColor: theme['bgOptions'],
      zIndex: 1000,
    };
  },
  control(base) {
    return {
      ...base,
      backgroundColor: theme['bgOptions'],
      color: theme['primaryFontColor'],
      border: 'none',
    };
  },
  indicatorSeparator(base) {
    return {
      ...base,
      display: 'none'
    };
  },
  singleValue(base) {
    return {
      ...base,
      color: theme['primaryFontColor']
    };
  },
  input(base) {
    return {
      ...base,
      color: theme['primaryFontColor']
    };
  }
});