import React from 'react';

export default function DailyTrendChart() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-sm font-bold text-gray-800 mb-3">Daily Lead Trend</h3>
      <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200 text-gray-400 text-xs">
        <span>📈 Line Chart: New vs Qualified vs Converted Leads</span>
      </div>
    </div>
  );
}