export const initialData = {
  kpis: [
    { title: "New Leads", value: 91, trend: "+57.2% vs prev 31 days", border: "border-l-blue-500", textColor: "text-blue-600" },
    { title: "Qualified Leads", value: 42, sub: "46.2%", trend: "+34.4% vs prev 31 days", border: "border-l-green-500", textColor: "text-green-600" },
    { title: "Converted Leads", value: 16, sub: "25.3%", trend: "+40.7% vs prev 31 days", border: "border-l-purple-500", textColor: "text-purple-600" },
    { title: "Unqualified Leads", value: 49, sub: "53.8%", trend: "-43% vs prev 31 days", border: "border-l-red-500", textColor: "text-red-500" },
    { title: "Conversion Rate", value: "25.3%", trend: "+61.7% vs prev 31 days", border: "border-l-teal-500", textColor: "text-teal-600" },
    { title: "Quotations Created", value: 107, trend: "+127.7% vs prev 31 days", border: "border-l-indigo-500", textColor: "text-indigo-600" },
    { title: "Deals Created", value: 23, trend: "+61.7% vs prev 31 days", border: "border-l-cyan-500", textColor: "text-cyan-600" },
    { title: "Invoices Generated", value: 142, trend: "+19.7% vs prev 31 days", border: "border-l-emerald-500", textColor: "text-emerald-600" }
  ],
  funnelData: [
    { name: "New Leads", value: 91, fill: "#3b82f6" },
    { name: "Qualified Leads", value: 42, fill: "#22c55e" },
    { name: "Converted Leads", value: 16, fill: "#a855f7" }
  ],
  sourcesData: [
    { name: "Google Ads", value: 70, percent: "76.9%" },
    { name: "Website", value: 21, percent: "23.1%" },
    { name: "Other", value: 0, percent: "0%" },
    { name: "Just Dial", value: 0, percent: "0%" }
  ],
  quotationsTable: [
    { service: "Private Limited Company", count: 56, amount: 1248800, accepted: 0, pending: 56, rejected: 0, conv: "0%" },
    { service: "LLP Registration", count: 16, amount: 135272, accepted: 0, pending: 16, rejected: 0, conv: "0%" },
    { service: "Trademark", count: 8, amount: 22490, accepted: 0, pending: 8, rejected: 0, conv: "0%" },
    { service: "Startup India Registration", count: 5, amount: 22300, accepted: 0, pending: 5, rejected: 0, conv: "0%" },
    { service: "ISO Certification", count: 2, amount: 275000, accepted: 0, pending: 1, rejected: 1, conv: "0%" }
  ],
  revenueData: {
    totalValue: 182627,
    collected: 120698,
    outstanding: 61929,
    priorities: [
      { priority: "High", deals: 14, revenue: 65420, percent: "60.9%" },
      { priority: "Medium", deals: 9, revenue: 37400, percent: "39.1%" },
      { priority: "Low", deals: 0, revenue: 0, percent: "0%" }
    ]
  },
  activityLogs: [
    { time: "2026-10-18 11:15", user: "Nancy Singh", action: "Lead updated", record: "PL-209010" },
    { time: "2026-10-18 11:14", user: "Nancy Singh", action: "Lead updated", record: "PL-209010" },
    { time: "2026-10-18 11:12", user: "Sneha Choudhary", action: "Quotation created", record: "Q-1087" },
    { time: "2026-10-18 11:10", user: "Tannu Kumari", action: "Quotation created", record: "Q-1086" }
  ]
};