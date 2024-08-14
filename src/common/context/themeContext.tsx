import { ThemeProvider } from 'styled-components';
import React, { createContext, useContext, useState } from 'react';
import { theme } from '../../common/constants/theme';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/parsedLocalStorage';
import { Theme } from '../../types/Theme';

const THEME_STORAGE_KEY = 'schedule-theme';

interface Props {
  children: React.ReactNode;
}

interface ThemeContext {
  currentTheme?: Theme;
  changeTheme: (theme: Theme) => void,
}

const ThemeSelectorContext = createContext<ThemeContext>({
  changeTheme: () => {},
});

export const useThemeSelectorContext = () => useContext(ThemeSelectorContext);

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const getTheme = () => {
    const localStorageTheme = getLocalStorageItem(THEME_STORAGE_KEY)
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (!localStorageTheme) {
      return prefersLight ? 'light' : 'dark';
    }

    return localStorageTheme as Theme;
  };

  const [currentTheme, setTheme] = useState(getTheme());

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    setLocalStorageItem(THEME_STORAGE_KEY, theme);
  }

  const context: ThemeContext = {
    currentTheme,
    changeTheme,
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeSelectorContext.Provider value={context}>
        {children}
      </ThemeSelectorContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;