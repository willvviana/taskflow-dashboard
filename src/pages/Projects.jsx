import { useState } from "react";
import { projects } from "../data/mockData.js";

const STATUS_STYLE = {
  "In progress": "bg-indigo-100 text-indigo-700",
  "Review":      "bg-amber-100 text-amber-700",
  "Completed":   "bg-emerald-100 text-emerald-700",
  "Not started": "bg-slate-100 text-slate-600",
};

const STATUSES = ["All", "In progress", "Review", "Completed", "Not started"];

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Projects <span className="text-slate-400 font-normal">({filtered.length})</span>
        </h2>

        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors
                ${filter === s
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500">
          No projects match this filter.
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-6 py-3 font-medium">Project</th>
                  <th className="text-left px-6 py-3 font-medium">Client</th>
                  <th className="text-left px-6 py-3 font-medium">Status</th>
                  <th className="text-left px-6 py-3 font-medium">Deadline</th>
                  <th className="text-right px-6 py-3 font-medium">Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{p.name}</td>
                    <td className="px-6 py-4 text-slate-600">{p.client}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLE[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{formatDate(p.deadline)}</td>
                    <td className="px-6 py-4 text-right font-medium text-slate-900">
                      ${p.budget.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLE[p.status]}`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{p.client}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{formatDate(p.deadline)}</span>
                  <span className="font-semibold text-slate-900">${p.budget.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}