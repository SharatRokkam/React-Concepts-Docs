import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#eee' : '#222' }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
}

export default Header