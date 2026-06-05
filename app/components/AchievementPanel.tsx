"use client";

import { DailyData } from "../lib/types";

type Props = {
  data: DailyData;
};

export default function AchievementPanel({
  data,
}: Props) {
  const achievements = [];

  const completedTasks = [
    data.task1Done,
    data.task2Done,
    data.task3Done,
  ].filter(Boolean).length;

  const completedHabits = [
    data.gym,
    data.reading,
    data.water,
    data.noScroll,
  ].filter(Boolean).length;

  const focusMinutes =
    Math.floor(data.focusSeconds / 60);

  if (completedTasks === 3) {
    achievements.push("🎯 Task Master");
  }

  if (completedHabits === 4) {
    achievements.push("✅ Habit Champion");
  }

  if (focusMinutes >= 60) {
    achievements.push("⚡ Deep Focus");
  }

  if (data.sessions >= 5) {
    achievements.push("🔥 Focus Warrior");
  }

  if (
    completedTasks === 3 &&
    completedHabits === 4 &&
    focusMinutes >= 60
  ) {
    achievements.push("🏆 Productivity Beast");
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">

      <h2 className="text-3xl font-bold mb-6">
        🏆 Achievements
      </h2>

      {achievements.length === 0 ? (
        <div className="bg-slate-100 rounded-xl p-4">
          <p className="text-slate-600">
            Complete tasks, habits, and focus
            sessions to unlock achievements.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((badge) => (
            <div
              key={badge}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-4 font-bold text-lg"
            >
              {badge}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}