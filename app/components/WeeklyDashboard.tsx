"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type WeekPoint = {
  day: string;
  score: number;
};

type Props = {
  data?: WeekPoint[];
};

const fallbackData: WeekPoint[] = [
  { day: "Mon", score: 40 },
  { day: "Tue", score: 55 },
  { day: "Wed", score: 70 },
  { day: "Thu", score: 60 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 90 },
  { day: "Sun", score: 75 },
];

export default function WeeklyDashboard({ data }: Props) {
  const chartData = data && data.length > 0 ? data : fallbackData;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
        📅 Weekly Dashboard
      </h2>

      {/* IMPORTANT: fixed height container prevents -1 width/height bug */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}