import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { BRAND_MAP } from '../constants';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  brand: string;
  setBrand: (brand: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [brand, setBrand] = useState('brand-plasma-core');

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
  }, [theme]);

  useEffect(() => {
    const brands = Object.keys(BRAND_MAP);
    brands.forEach((b) => document.documentElement.classList.remove(b));
    document.documentElement.classList.add(brand);
  }, [brand]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, brand, setBrand }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
