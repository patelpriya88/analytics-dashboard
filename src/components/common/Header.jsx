import React from 'react';

export default function Header({ dateFilter, setDateFilter, userFilter, setUserFilter }) {
  const handleExport = () => {
    const csvContent = [
      ["Category", "Metric / Service", "Value / Amount"],
      ["Lead Funnel", "New Leads", "91"],
      ["Lead Funnel", "Qualified Leads", "42"],
      ["Lead Funnel", "Converted Leads", "16"],
      ["Revenue", "Total Deal Value", '"₹1,82,627"'],
      ["Revenue", "Net Collected Revenue", '"₹1,20,698"'],
      ["Revenue", "Net Outstanding Revenue", '"₹61,929"'],
      ["Quotations", "Private Limited Company", '"₹12,48,800"'],
      ["Quotations", "LLP Registration", '"₹1,35,272"'],
      ["Quotations", "Trademark", '"₹22,490"'],
      ["Quotations", "Startup India Registration", '"₹22,300"']
    ]
    .map(e => e.join(","))
    .join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Business_Analytics_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-white border-b border-slate-200 py-4 px-6 flex flex-wrap justify-between items-center gap-4">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Business Performance & Revenue Analytics</h1>
        <p className="text-xs text-slate-500">Track your leads, conversions, quotations, deals, revenue and operations in real time.</p>
      </div>
      
      <div className="flex items-center gap-3 flex-wrap">
        {/* Date Dropdown */}
        <select 
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="Oct 2026">Oct 1 - Oct 31, 2026</option>
          <option value="Sep 2026">Sep 1 - Sep 30, 2026</option>
        </select>

        {/* User Dropdown */}
        <select 
          value={userFilter}
          onChange={(e) => setUserFilter(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="All">All Users</option>
          <option value="Me">Assigned to Me</option>
        </select>

        <button 
          onClick={handleExport}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <span>↓ Export</span>
        </button>
      </div>
    </header>
  );
}