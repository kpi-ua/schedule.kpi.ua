import 'styled-components';
import type { ThemeKey } from '../common/constants/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Record<ThemeKey, string> {}
}
