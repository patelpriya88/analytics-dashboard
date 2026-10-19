import React from 'react';

export default function QuotationTable({ dateRange, category }) {
  const multiplier = dateRange === "90" ? 2.5 : dateRange === "365" ? 8 : 1;
  const isSaaS = category === "SaaS" ? 0.7 : category === "Enterprise" ? 1.2 : 1;

  const data = [
    { service: 'Private Limited Company', count: Math.round(56 * multiplier * isSaaS), amount: Math.round(1248800 * multiplier * isSaaS), conv: '12%' },
    { service: 'LLP Registration', count: Math.round(16 * multiplier * isSaaS), amount: Math.round(135272 * multiplier * isSaaS), conv: '8%' },
    { service: 'Trademark', count: Math.round(8 * multiplier * isSaaS), amount: Math.round(22490 * multiplier * isSaaS), conv: '15%' },
    { service: 'Startup India Registration', count: Math.round(5 * multiplier * isSaaS), amount: Math.round(22300 * multiplier * isSaaS), conv: '10%' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Service Wise Quotation Details</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-2 px-3">Service / Order</th>
              <th className="py-2 px-3">Quotations</th>
              <th className="py-2 px-3">Quoted Amount</th>
              <th className="py-2 px-3">Conv. Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-medium text-slate-800">{row.service}</td>
                <td className="py-2.5 px-3">{row.count}</td>
                <td className="py-2.5 px-3 font-semibold text-slate-900">₹{row.amount.toLocaleString('en-IN')}</td>
                <td className="py-2.5 px-3 text-emerald-600 font-medium">{row.conv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}