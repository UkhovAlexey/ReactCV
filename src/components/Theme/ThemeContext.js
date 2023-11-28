import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add('night-mode');
    } else {
      document.documentElement.classList.remove('night-mode');
    }
  }, [isNightMode]);

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
