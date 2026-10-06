const TYPE_META = {
  payment: { color: "bg-emerald-100 text-emerald-700", icon: "$" },
  task:    { color: "bg-indigo-100 text-indigo-700",   icon: "✓" },
  message: { color: "bg-amber-100 text-amber-700",     icon: "✉" },
  project: { color: "bg-slate-100 text-slate-700",     icon: "▣" },
};

export default function ActivityList({ items }) {
  return (
    <ul className="divide-y divide-slate-100">
      {items.map((item) => {
        const meta = TYPE_META[item.type] ?? TYPE_META.project;
        return (
          <li key={item.id} className="flex items-start gap-3 py-3">
            <span className={`shrink-0 w-8 h-8 rounded-lg grid place-items-center text-sm font-bold ${meta.color}`}>
              {meta.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-800">{item.text}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
            </div>
            {item.amount && (
              <span className="text-sm font-semibold text-emerald-600 shrink-0">{item.amount}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}