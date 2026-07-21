import 'styled-components';
import type { ThemeKey } from '../common/constants/theme';

declare module 'styled-components' {
  // styled-components requires an interface here so its DefaultTheme can be augmented.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Record<ThemeKey, string> {}
}
