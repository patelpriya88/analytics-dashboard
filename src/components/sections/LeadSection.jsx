import React from 'react';

export default function LeadSection({ dateRange, category }) {
  // Dynamic calculation multiplier based on selection
  const multiplier = dateRange === "90" ? 2.5 : dateRange === "365" ? 8 : 1;
  const isSaaS = category === "SaaS" ? 0.6 : category === "Enterprise" ? 0.4 : 1;

  const newLeads = Math.round(91 * multiplier * isSaaS);
  const qualifiedLeads = Math.round(42 * multiplier * isSaaS);
  const convertedLeads = Math.round(16 * multiplier * isSaaS);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Lead Funnel</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-lg font-medium">
          <span>New Leads</span>
          <span>{newLeads}</span>
        </div>
        <div className="flex justify-between items-center bg-emerald-500 text-white p-3 rounded-lg font-medium">
          <span>Qualified Leads</span>
          <span>{qualifiedLeads}</span>
        </div>
        <div className="flex justify-between items-center bg-purple-500 text-white p-3 rounded-lg font-medium">
          <span>Converted Leads</span>
          <span>{convertedLeads}</span>
        </div>
      </div>
    </div>
  );
}