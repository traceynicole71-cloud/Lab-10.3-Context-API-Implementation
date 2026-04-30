import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ThemeContext';

//wrap main app components with providers
export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <TodoProvider>
                <FilterProvider>
                    {children}
                </FilterProvider>
            </TodoProvider>
        </ThemeProvider>
    );
};