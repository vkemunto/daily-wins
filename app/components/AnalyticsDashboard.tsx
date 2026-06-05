"use client";

import { DailyData } from "../lib/types";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: DailyData;
};

export default function AnalyticsDashboard({
  data,
}: Props) {
  const chartData = [
    {
      name: "Tasks",
      value: [
        data.task1Done,
        data.task2Done,
        data.task3Done,
      ].filter(Boolean).length,
    },
    {
      name: "Habits",
      value: [
        data.gym,
        data.reading,
        data.water,
        data.noScroll,
      ].filter(Boolean).length,
    },
    {
      name: "Sessions",
      value: data.sessions,
    },
    {
      name: "XP",
      value: data.xp,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6">
      <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
        📊 Analytics Dashboard
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}