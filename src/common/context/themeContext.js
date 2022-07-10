import { ThemeProvider } from 'styled-components';
import { createContext, useContext, useEffect, useState } from 'react';
import { theme } from '../../common/constants/theme';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/parsedLocalStorage';

const ThemeSelectorContext = createContext(null);

export const useThemeSelectorContext = () => useContext(ThemeSelectorContext);

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState('light');
  useEffect(() => {
    const localStorageTheme = getLocalStorageItem("theme")
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (localStorageTheme) {
      changeTheme(localStorageTheme === 'light')
    }
    else {
      changeTheme(prefersLight)
    }
  }, [])

  const changeTheme = isLightTheme => {
    const newTheme = isLightTheme ? 'light' : 'dark'
    setTheme(newTheme);
    setLocalStorageItem("theme", newTheme)
  }
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeSelectorContext.Provider value={changeTheme}>
        {children}
      </ThemeSelectorContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;