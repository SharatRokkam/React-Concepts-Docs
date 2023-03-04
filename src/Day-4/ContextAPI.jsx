// Create a new context for the theme
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

// Create a provider component that will pass the theme to its children
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}