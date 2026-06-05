"use client";

import { useEffect } from "react";
import { useDailyData } from "./hooks/useDailyData";

import DashboardSummary from "./components/DashboardSummary";
import DailyPlanner from "./components/DailyPlanner";
import FocusTimer from "./components/FocusTimer";
import HabitTracker from "./components/HabitTracker";
import StreakTracker from "./components/StreakTracker";
import WeeklyDashboard from "./components/WeeklyDashboard";
import ProductivityScore from "./components/ProductivityScore";
import DailyReflection from "./components/DailyReflection";
import GoalsTracker from "./components/GoalsTracker";
import AchievementPanel from "./components/AchievementPanel";
import ThemeToggle from "./components/ThemeToggle";
import LevelCard from "./components/LevelCard";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

export default function Home() {
  const { data, setData } = useDailyData();

  /**
   * WEEKLY DATA (safe fallback so chart NEVER breaks)
   */
  const weekData = [
    { day: "Mon", score: 0 },
    { day: "Tue", score: 0 },
    { day: "Wed", score: 0 },
    { day: "Thu", score: 0 },
    { day: "Fri", score: 0 },
    { day: "Sat", score: 0 },
    { day: "Sun", score: 0 },
  ];

  /**
   * XP SYSTEM
   */
  useEffect(() => {
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

    const taskXP = completedTasks * 10;
    const habitXP = completedHabits * 5;
    const sessionXP = data.sessions * 20;

    const totalXP = taskXP + habitXP + sessionXP;

    let level = 1;
    if (totalXP >= 100) level = 2;
    if (totalXP >= 250) level = 3;
    if (totalXP >= 500) level = 4;
    if (totalXP >= 1000) level = 5;

    if (totalXP !== data.xp || level !== data.level) {
      setData((prev) => ({
        ...prev,
        xp: totalXP,
        level,
      }));
    }
  }, [data, setData]);

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors p-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-800 text-white p-8 rounded-3xl mb-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-5xl font-bold">👋 Daily Wins</h1>
              <p className="mt-2 text-slate-300">
                Become 1% better every day
              </p>
            </div>

            <ThemeToggle />
          </div>
        </div>

        {/* DASHBOARD */}
        <DashboardSummary data={data} />

        {/* PRODUCTIVITY */}
        <div className="mt-6">
          <ProductivityScore data={data} />
        </div>

        {/* LEVEL */}
        <div className="mt-6">
          <LevelCard data={data} />
        </div>

        {/* PLANNER + TIMER */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <DailyPlanner data={data} setData={setData} />
          <FocusTimer data={data} setData={setData} />
        </div>

        {/* HABITS + STREAK */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <HabitTracker data={data} setData={setData} />
          <StreakTracker data={data} />
        </div>

        {/* WEEKLY DASHBOARD (FIXED) */}
        <div className="mt-6">
          <WeeklyDashboard data={weekData} />
        </div>

        {/* REFLECTION */}
        <div className="mt-6">
          <DailyReflection />
        </div>

        {/* GOALS */}
        <div className="mt-6">
          <GoalsTracker />
        </div>

        {/* ACHIEVEMENTS */}
        <div className="mt-6">
          <AchievementPanel data={data} />
        </div>

        {/* ANALYTICS */}
        <div className="mt-6">
          <AnalyticsDashboard data={data} />
        </div>

      </div>
    </main>
  );
}