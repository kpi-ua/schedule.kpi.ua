export const getValueFromTheme = (key: string) => (props: { theme: any }) => {
  return props.theme[key];
};
