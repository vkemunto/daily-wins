"use client";

import { useEffect, useState } from "react";

export default function HabitTracker() {
  const [gym, setGym] = useState(false);
  const [reading, setReading] = useState(false);
  const [water, setWater] = useState(false);
  const [noScroll, setNoScroll] = useState(false);

  // LOAD SAVED HABITS
  useEffect(() => {
    const saved = localStorage.getItem("daily-habits");

    if (!saved) return;

    const data = JSON.parse(saved);

    setGym(data.gym || false);
    setReading(data.reading || false);
    setWater(data.water || false);
    setNoScroll(data.noScroll || false);
  }, []);

  // AUTO SAVE
  useEffect(() => {
    const data = {
      gym,
      reading,
      water,
      noScroll,
    };

    localStorage.setItem(
      "daily-habits",
      JSON.stringify(data)
    );
  }, [gym, reading, water, noScroll]);

  const completed =
    [gym, reading, water, noScroll].filter(Boolean).length;

  const percentage = Math.floor(
    (completed / 4) * 100
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        ✅ Habit Tracker
      </h2>

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

      {/* PROGRESS */}
      <div className="mt-6">

        <div className="flex justify-between mb-2">
          <span className="font-medium">
            Daily Habit Progress
          </span>

          <span className="font-bold">
            {percentage}%
          </span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

      </div>
    </div>
  );
}