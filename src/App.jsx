import React from 'react';
import { FilterProvider } from './context/FilterContext';
import DashboardView from './views/DashboardView';

export default function App() {
  return (
    <FilterProvider>
      <DashboardView />
    </FilterProvider>
  );
}