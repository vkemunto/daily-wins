"use client";

import { DailyData } from "../lib/types";

type Props = {
  data: DailyData;
};

export default function StreakTracker({ data }: Props) {
  const streak = data.sessions || 1;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        🔥 Current Streak
      </h2>

      <div className="text-6xl font-bold text-orange-500">
        {streak}
      </div>

      <p className="mt-3 text-slate-600">
        Consecutive productive days.
      </p>
    </div>
  );
}