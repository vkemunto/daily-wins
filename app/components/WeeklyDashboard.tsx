"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  data: { day: string; score: number }[];
};

export default function WeeklyDashboard({ data }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // prevent SSR chart rendering completely
  if (!mounted) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">
          📅 Weekly Dashboard
        </h2>
        <div className="h-[300px]" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        📅 Weekly Dashboard
      </h2>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}