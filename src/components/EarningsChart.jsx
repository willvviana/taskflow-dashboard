import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import { earningsByMonth } from "../data/mockData.js";

export default function EarningsChart() {
  return (
    // ResponsiveContainer makes the chart fill its parent.
    // Without it, the chart uses a fixed size that breaks on mobile.
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={earningsByMonth} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`, "Earnings"]}
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13 }}
          />
          <Bar dataKey="earnings" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}