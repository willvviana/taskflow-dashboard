export default function StatCard({ label, value, change, trend = "flat" }) {
  const trendColor = {
    up:   "text-emerald-600",
    down: "text-rose-600",
    flat: "text-slate-500",
  }[trend];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      <p className={`text-xs mt-2 ${trendColor}`}>{change}</p>
    </div>
  );
}