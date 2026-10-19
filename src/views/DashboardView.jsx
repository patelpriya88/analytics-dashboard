import React, { useState } from 'react';
import Header from '../components/common/Header';
import FilterBar from '../components/common/FilterBar';2
import LeadSection from '../components/sections/LeadSection';
import RevenueSection from '../components/sections/RevenueSection';
import ActivityTable from '../components/tables/ActivityTable';
import QuotationTable from '../components/tables/QuotationTable';

export default function DashboardView() {
  // Global Filter States
  const [dateRange, setDateRange] = useState("30");
  const [category, setCategory] = useState("All");
  const [dateFilter, setDateFilter] = useState("Oct 2026");
  const [userFilter, setUserFilter] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-12">
      <Header 
        dateFilter={dateFilter} 
        setDateFilter={setDateFilter}
        userFilter={userFilter} 
        setUserFilter={setUserFilter}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        <FilterBar 
          dateRange={dateRange} 
          setDateRange={setDateRange} 
          category={category} 
          setCategory={setCategory} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <LeadSection dateRange={dateRange} category={category} dateFilter={dateFilter} userFilter={userFilter} />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <RevenueSection dateRange={dateRange} category={category} dateFilter={dateFilter} userFilter={userFilter} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <ActivityTable dateRange={dateRange} category={category} dateFilter={dateFilter} userFilter={userFilter} />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <QuotationTable dateRange={dateRange} category={category} dateFilter={dateFilter} userFilter={userFilter} />
          </div>
        </div>
      </main>
    </div>
  );
}z