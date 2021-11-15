import { ThemeProvider } from 'styled-components';
import { createContext, useContext, useState } from 'react';
import { theme } from '../../common/constants/theme';

const ThemeSelectorContext = createContext(null);

export const useThemeSelectorContext = () => useContext(ThemeSelectorContext);

const ThemeContextProvider = ({children}) => {
  const [currentTheme, setTheme] = useState('light');

  const changeTheme = value => {
    setTheme(value ? 'light' : 'dark');
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