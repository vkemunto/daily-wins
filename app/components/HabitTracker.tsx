"use client";

import { useEffect, useState } from "react";
import { DailyData } from "../lib/types";

type Props = {
  data: DailyData;
  setData: React.Dispatch<React.SetStateAction<DailyData>>;
};

export default function HabitTracker({ data, setData }: Props) {
  const [gym, setGym] = useState(data.gym);
  const [reading, setReading] = useState(data.reading);
  const [water, setWater] = useState(data.water);
  const [noScroll, setNoScroll] = useState(data.noScroll);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      gym,
      reading,
      water,
      noScroll,
    }));
  }, [gym, reading, water, noScroll, setData]);

  const completed = [gym, reading, water, noScroll].filter(Boolean).length;

  const percentage = Math.floor((completed / 4) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">✅ Habit Tracker</h2>

      <div className="space-y-4">

        <label className="flex items-center gap-3 text-lg">
          <input
            type="checkbox"
            checked={gym}
            onChange={() => setGym(!gym)}
          />
          Gym at 5 AM
        </label>

        <label className="flex items-center gap-3 text-lg">
          <input
            type="checkbox"
            checked={reading}
            onChange={() => setReading(!reading)}
          />
          Read 10 Pages
        </label>

        <label className="flex items-center gap-3 text-lg">
          <input
            type="checkbox"
            checked={water}
            onChange={() => setWater(!water)}
          />
          Drink 3L Water
        </label>

        <label className="flex items-center gap-3 text-lg">
          <input
            type="checkbox"
            checked={noScroll}
            onChange={() => setNoScroll(!noScroll)}
          />
          No Doom Scrolling
        </label>

      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span>Daily Habit Progress</span>
          <span className="font-bold">{percentage}%</span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}