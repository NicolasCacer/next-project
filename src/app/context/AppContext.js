'use client';

import { createContext, useContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Create provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [theme, setTheme] = useState('light'); // Store theme preference

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <AppContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using context
export const useAppContext = () => useContext(AppContext);
