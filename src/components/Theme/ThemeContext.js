import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function getInitialTheme() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return false;
}

export function ThemeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useLocalStorage('isNightMode', getInitialTheme());

  const toggleTheme = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('night-mode', isNightMode);
  }, [isNightMode]);

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
