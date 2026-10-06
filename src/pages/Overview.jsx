import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { stats, activities, taskBreakdown } from "../data/mockData.js";
import StatCard from "../components/StatCard.jsx";
import ActivityList from "../components/ActivityList.jsx";
import EarningsChart from "../components/EarningsChart.jsx";

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Stat cards row: 1 col mobile → 2 → 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      {/* Chart (2/3) + activity list (1/3). Stacks on mobile. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900">Earnings</h2>
            <span className="text-xs text-slate-500">Last 10 months</span>
          </div>
          <EarningsChart />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-900 mb-2">Recent activity</h2>
          <ActivityList items={activities.slice(0, 5)} />
        </div>
      </div>

      {/* Task breakdown pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-900 mb-4">Task breakdown this month</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {taskBreakdown.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v, n) => [`${v}%`, n]} />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  wrapperStyle={{ fontSize: 13, paddingTop: 12 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-900 mb-3">Quick actions</h2>
          <div className="flex flex-col gap-2">
            <button className="text-left px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm">+ New project</button>
            <button className="text-left px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm">+ Log time</button>
            <button className="text-left px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-sm">+ Create invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
}