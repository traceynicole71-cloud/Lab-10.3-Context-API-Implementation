import React, { createContext, useContext, useState } from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface FilterContextType {
    filter: FilterType;
    setFilter: (f: FilterType) => void; //set filter
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<FilterType>('all'); //visibility filter useState

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilter must be used within FilterProvider");
    return context;
};