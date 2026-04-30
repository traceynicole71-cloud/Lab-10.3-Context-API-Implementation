import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //auto update local storage
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('lab-theme') as Theme) || 'dark';
    });

    ///visually change by theme selection DOM class
    useEffect(() => {
        localStorage.setItem('lab-theme', theme);
        const root = window.document.documentElement;
        theme == 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext)!;