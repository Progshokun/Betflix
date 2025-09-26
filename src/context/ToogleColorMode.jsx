import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, useEffect, useState } from 'react';

export const ColorModeContext = createContext();

const ToogleColorMode = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const theme = createTheme({ palette: { mode } });

  const toogleColorTheme = () => {
    setMode(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  useEffect(() => {
    const modeFromLocaleStorage = localStorage.getItem('theme');
    if (modeFromLocaleStorage) {
      setMode(modeFromLocaleStorage);
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <ColorModeContext.Provider value={{ mode, toogleColorTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToogleColorMode;
