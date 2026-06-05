"use client";

import { useEffect, useState } from "react";

export default function StreakTracker() {
  const [streak, setStreak] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem("daily-streak");

    if (stored) {
      setStreak(Number(stored));
    } else {
      localStorage.setItem("daily-streak", "1");
    }
  }, []);

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