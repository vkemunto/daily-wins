"use client";

import { DailyData } from "../lib/types";
import { getProductivityScore } from "../lib/helpers";

type Props = {
  data: DailyData;
};

export default function ProductivityScore({
  data,
}: Props) {
  const score =
    getProductivityScore(data);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        📊 Productivity Score
      </h2>

      <div className="text-6xl font-bold text-green-600">
        {score}
      </div>

      <div className="w-full bg-slate-200 rounded-full h-4 mt-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  );
}