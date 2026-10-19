import React from 'react';
import { initialData } from '../../data/mockdata';

export default function LeadFunnelChart() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-sm font-bold text-gray-800 mb-3">Lead Funnel</h3>
      <div className="space-y-2">
        {initialData.funnelData.map((item, idx) => (
          <div 
            key={idx} 
            className="p-3 rounded-lg text-white font-medium flex justify-between items-center text-xs" 
            style={{ backgroundColor: item.fill }}
          >
            <span>{item.name}</span>
            <span className="font-bold text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}