"use client";

import { DailyData } from "../lib/types";

type Props = {
  data: DailyData;
};

export default function LevelCard({ data }: Props) {
  const currentXP = data.xp || 0;

  let level = 1;
  let nextLevelXP = 100;

  if (currentXP >= 100) {
    level = 2;
    nextLevelXP = 250;
  }

  if (currentXP >= 250) {
    level = 3;
    nextLevelXP = 500;
  }

  if (currentXP >= 500) {
    level = 4;
    nextLevelXP = 1000;
  }

  if (currentXP >= 1000) {
    level = 5;
    nextLevelXP = 1500;
  }

  const progress =
    (currentXP / nextLevelXP) * 100;

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">

      <h2 className="text-3xl font-bold mb-4">
        🏆 Level System
      </h2>

      <div className="text-6xl font-bold text-yellow-500 mb-4">
        Lv {level}
      </div>

      <p className="text-slate-500 dark:text-slate-400 mb-3">
        XP: {currentXP}
      </p>

      <div className="w-full bg-slate-200 rounded-full h-5">
        <div
          className="bg-yellow-500 h-5 rounded-full transition-all duration-500"
          style={{
            width: `${Math.min(progress, 100)}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Next Level: {nextLevelXP} XP
      </p>

    </div>
  );
}