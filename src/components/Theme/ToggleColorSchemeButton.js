import React from 'react';
import { useTheme } from './ThemeContext';
import "./themeButton.css"

const ToggleColorSchemeButton = () => {
  const { isNightMode, toggleTheme } = useTheme();

  return (
    <button
      className="schemeButton"
      onClick={toggleTheme}
      aria-label={isNightMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isNightMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleColorSchemeButton;
