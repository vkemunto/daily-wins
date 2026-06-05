"use client";

import { useEffect, useState } from "react";

export default function DailyReflection() {
  const [wins, setWins] = useState("");
  const [improvements, setImprovements] = useState("");
  const [lesson, setLesson] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("daily-reflection");

    if (!saved) return;

    const data = JSON.parse(saved);

    setWins(data.wins || "");
    setImprovements(data.improvements || "");
    setLesson(data.lesson || "");
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "daily-reflection",
      JSON.stringify({
        wins,
        improvements,
        lesson,
      })
    );
  }, [wins, improvements, lesson]);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">
          🤔 Daily Reflection
        </h2>

        <p className="text-slate-500 mt-2">
          Reflect. Learn. Improve.
        </p>
      </div>

      <div className="space-y-5">

        <div>
          <label className="block font-semibold mb-2 text-slate-700">
            ✅ What went well today?
          </label>

          <textarea
            value={wins}
            onChange={(e) => setWins(e.target.value)}
            placeholder="List today's wins..."
            className="w-full h-24 border-2 border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-slate-700">
            📈 What could improve?
          </label>

          <textarea
            value={improvements}
            onChange={(e) => setImprovements(e.target.value)}
            placeholder="What could be better tomorrow?"
            className="w-full h-24 border-2 border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-slate-700">
            💡 One lesson learned
          </label>

          <textarea
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            placeholder="What's one lesson from today?"
            className="w-full h-24 border-2 border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-indigo-500"
          />
        </div>

      </div>

      <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
        <p className="font-semibold text-indigo-700">
          Daily Growth Reminder
        </p>

        <p className="text-slate-700 mt-2">
          Small improvements repeated every day create
          extraordinary results over time.
        </p>
      </div>

    </div>
  );
}