import React from 'react';

export default function KPICard({ title, value, sub, trend, border, textColor }) {
  return (
    <div className={`bg-white p-3 rounded-lg border-l-4 ${border || 'border-l-blue-500'} shadow-sm border-y border-r border-gray-100 flex flex-col justify-between`}>
      <span className="text-[11px] font-semibold text-gray-500 uppercase">{title}</span>
      <div className="my-1">
        <span className={`text-xl font-bold ${textColor || 'text-blue-600'}`}>{value}</span>
        {sub && <span className="text-xs text-gray-400 ml-1">({sub})</span>}
      </div>
      <span className="text-[10px] text-gray-400 truncate">{trend}</span>
    </div>
  );
}