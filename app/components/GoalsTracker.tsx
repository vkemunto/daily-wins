"use client";

import { useEffect, useState } from "react";

export default function GoalsTracker() {
  const [monthlyGoal, setMonthlyGoal] = useState("");
  const [quarterlyGoal, setQuarterlyGoal] = useState("");

  const [monthlyProgress, setMonthlyProgress] =
    useState(0);

  const [quarterlyProgress, setQuarterlyProgress] =
    useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(
      "goals-tracker"
    );

    if (!saved) return;

    const data = JSON.parse(saved);

    setMonthlyGoal(data.monthlyGoal || "");
    setQuarterlyGoal(data.quarterlyGoal || "");

    setMonthlyProgress(
      data.monthlyProgress || 0
    );

    setQuarterlyProgress(
      data.quarterlyProgress || 0
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "goals-tracker",
      JSON.stringify({
        monthlyGoal,
        quarterlyGoal,
        monthlyProgress,
        quarterlyProgress,
      })
    );
  }, [
    monthlyGoal,
    quarterlyGoal,
    monthlyProgress,
    quarterlyProgress,
  ]);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">

      <h2 className="text-3xl font-bold mb-6">
        🎯 Goals Tracker
      </h2>

      <div className="space-y-6">

        <div>
          <label className="block font-semibold mb-2">
            Monthly Goal
          </label>

          <input
            value={monthlyGoal}
            onChange={(e) =>
              setMonthlyGoal(e.target.value)
            }
            placeholder="Example: Read 3 books"
            className="w-full border-2 border-slate-300 rounded-xl p-3"
          />

          <input
            type="range"
            min="0"
            max="100"
            value={monthlyProgress}
            onChange={(e) =>
              setMonthlyProgress(
                Number(e.target.value)
              )
            }
            className="w-full mt-4"
          />

          <p className="font-bold text-indigo-600">
            {monthlyProgress}% Complete
          </p>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Quarterly Goal
          </label>

          <input
            value={quarterlyGoal}
            onChange={(e) =>
              setQuarterlyGoal(e.target.value)
            }
            placeholder="Example: Launch a business"
            className="w-full border-2 border-slate-300 rounded-xl p-3"
          />

          <input
            type="range"
            min="0"
            max="100"
            value={quarterlyProgress}
            onChange={(e) =>
              setQuarterlyProgress(
                Number(e.target.value)
              )
            }
            className="w-full mt-4"
          />

          <p className="font-bold text-green-600">
            {quarterlyProgress}% Complete
          </p>
        </div>

      </div>
    </div>
  );
}