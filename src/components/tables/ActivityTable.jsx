import React from 'react';

export default function ActivityTable({ dateRange, category }) {
  // Mock dataset based on selected filters
  const allActivities = [
    { id: 1, name: 'Nancy Singh', action: 'Lead updated', date: '2026-10-18 11:15', ref: 'PL-209010', type: 'Enterprise' },
    { id: 2, name: 'Sneha Choudhary', action: 'Quotation created', date: '2026-10-18 11:12', ref: 'IQ-1087', type: 'SaaS' },
    { id: 3, name: 'Tannu Kumari', action: 'Quotation created', date: '2026-10-18 11:10', ref: 'IQ-1086', type: 'SaaS' },
    { id: 4, name: 'Rahul Sharma', action: 'Payment received', date: '2026-10-15 09:30', ref: 'PAY-4401', type: 'Enterprise' },
    { id: 5, name: 'Amit Verma', action: 'New lead added', date: '2026-10-10 14:20', ref: 'PL-209001', type: 'Enterprise' },
  ];

  // Filter logic according to category
  const filteredActivities = category === 'All' 
    ? allActivities 
    : allActivities.filter(item => item.type === category);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Recent CRM Activity</h3>
      <div className="space-y-3">
        {filteredActivities.length > 0 ? (
          filteredActivities.slice(0, dateRange === "30" ? 3 : 5).map((act) => (
            <div key={act.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm">
              <div>
                <p className="font-semibold text-slate-800">{act.name} <span className="text-slate-500 font-normal">- {act.action}</span></p>
                <p className="text-xs text-slate-400 mt-0.5">{act.date} ({act.ref})</p>
              </div>
              <span className="text-xs font-medium bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full">{act.type}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 py-4 text-center">No activity records found for this category.</p>
        )}
      </div>
    </div>
  );
}