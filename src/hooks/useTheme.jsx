// hooks/useTheme.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? darkTheme : lightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const darkTheme = {
  // Backgrounds
  bg: '#020617',
  bg2: '#0f172a',
  bg3: '#0f172a',
  bgHover: '#1e293b',
  bgAccent: '#0a0f1e',
  
  // Text
  white: '#f0f0fa',
  text: '#e2e8f0',
  muted: '#94a3b8',
  mutedAlt: '#64748b',
  
  // Borders
  border: '#1e293b',
  borderLight: '#334155',
  
  // Semantic
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ff6b6b',
  
  // Status
  badge: {
    mandatory: '#22c55e',
    optional: '#f59e0b',
  }
};

const lightTheme = {
  // Backgrounds
  bg: '#ffffff',
  bg2: '#f8fafc',
  bg3: '#f1f5f9',
  bgHover: '#e2e8f0',
  bgAccent: '#f0f4f8',
  
  // Text
  white: '#0f172a',
  text: '#1e293b',
  muted: '#475569',
  mutedAlt: '#64748b',
  
  // Borders
  border: '#e2e8f0',
  borderLight: '#cbd5e1',
  
  // Semantic
  success: '#16a34a',
  warning: '#d97706',
  error: '#dc2626',
  
  // Status
  badge: {
    mandatory: '#16a34a',
    optional: '#d97706',
  }
};