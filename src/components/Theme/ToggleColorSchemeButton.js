import React from 'react';
import { useTheme } from './ThemeContext';
import "./themeButton.css"

const ToggleColorSchemeButton = () => {
  const { isNightMode, toggleTheme } = useTheme();

  return (
    <div>
      <button className="schemeButton" onClick={toggleTheme}>
        {isNightMode ? '#goLight' : '#goDark'}
      </button>
    </div>
  );
};

export default ToggleColorSchemeButton;
