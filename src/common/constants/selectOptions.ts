export const getSelectCustomStyle = (theme: any) => ({
  option(base: any) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
    };
  },
  menu(base: any) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
      "& .fast-option-focused": {
        color: theme['secondaryFontColor'],
      },
      "& .fast-option-selected": {
        color: theme['invertedFontColor'],
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
  indicatorSeparator(base: any) {
    return {
      ...base,
      display: 'none'
    };
  },
  singleValue(base: any) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
    };
  },
  input(base: any) {
    return {
      ...base,
      color: theme['secondaryFontColor'],
    };
  }
});