import { ThemeProvider } from 'styled-components';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { theme } from '../../common/constants/theme';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/parsedLocalStorage';

interface Props {
  children: React.ReactNode,
  initialValue?: 'light' | 'dark'
}

interface ContextType {
  changeTheme: (isLightTheme: boolean) => void,
}

const defaultContext: ContextType = {
  changeTheme: () => {},
};

const ThemeSelectorContext = createContext<ContextType>(defaultContext);


export const useThemeSelectorContext = () => useContext(ThemeSelectorContext);

const ThemeContextProvider: React.FC<Props> = ({ children, initialValue = 'light' }) => {
  const [currentTheme, setTheme] = useState(initialValue);

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

  const changeTheme = (isLightTheme: boolean) => {
    const newTheme = isLightTheme ? 'light' : 'dark'
    setTheme(newTheme);
    setLocalStorageItem("theme", newTheme)
  }
  
  const props = {
    changeTheme
  }
  
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeSelectorContext.Provider value={props}>
        {children}
      </ThemeSelectorContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;