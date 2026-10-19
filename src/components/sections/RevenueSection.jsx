import React from 'react';

export default function RevenueSection({ dateRange, category }) {
  const multiplier = dateRange === "90" ? 2.8 : dateRange === "365" ? 9.5 : 1;
  const categoryFactor = category === "SaaS" ? 0.7 : category === "Enterprise" ? 1.3 : 1;

  const totalDealValue = Math.round(182627 * multiplier * categoryFactor);
  const netCollected = Math.round(120698 * multiplier * categoryFactor);
  const netOutstanding = totalDealValue - netCollected;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Total vs Collected Revenue</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-500 uppercase font-semibold">Total Deal Value</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">₹{totalDealValue.toLocaleString('en-IN')}</p>
        </div>
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
          <p className="text-xs text-emerald-600 uppercase font-semibold">Net Collected Revenue</p>
          <p className="text-2xl font-extrabold text-emerald-700 mt-1">₹{netCollected.toLocaleString('en-IN')}</p>
        </div>
      </div>
      <div className="p-3 bg-red-50 rounded-lg border border-red-100 flex justify-between items-center">
        <span className="text-sm font-medium text-red-700">Net Outstanding Revenue</span>
        <span className="text-sm font-bold text-red-700">₹{netOutstanding.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
}