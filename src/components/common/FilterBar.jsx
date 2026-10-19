import React from 'react';

export default function FilterBar({ dateRange, setDateRange, category, setCategory }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-base font-semibold text-slate-800">Dashboard Filters</h2>
        <p className="text-xs text-slate-500">Filter your analytics and revenue data in real-time</p>
      </div>
      <div className="flex items-center gap-3">
        <select 
          value={dateRange} 
          onChange={(e) => setDateRange(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="30">Last 30 Days</option>
          <option value="90">This Quarter</option>
          <option value="365">This Year</option>
        </select>

        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option value="Enterprise">Enterprise</option>
          <option value="SaaS">SaaS</option>
        </select>
      </div>
    </div>
  );
}