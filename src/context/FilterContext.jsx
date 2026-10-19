import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState('Oct 1 - Oct 31, 2026');
  const [selectedUser, setSelectedUser] = useState('All Users');

  return (
    <FilterContext.Provider value={{ selectedDate, setSelectedDate, selectedUser, setSelectedUser }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);