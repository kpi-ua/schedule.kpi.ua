import type { DefaultTheme } from 'styled-components';
import type { ThemeKey } from '../constants/theme';

export const getValueFromTheme = (key: ThemeKey) => (props: { theme: DefaultTheme }) => {
  return props.theme[key];
};
