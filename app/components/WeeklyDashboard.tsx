"use client";

export default function WeeklyDashboard() {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = week.map((day, i) => ({
    day,
    score: Math.max(20, 100 - i * 12),
  }));

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        📅 Weekly Progress
      </h2>

      <div className="space-y-4">
        {data.map((d) => (
          <div key={d.day}>
            <div className="flex justify-between mb-1">
              <span>{d.day}</span>
              <span>{d.score}%</span>
            </div>

            <div className="w-full bg-slate-200 h-3 rounded-full">
              <div
                className="bg-indigo-500 h-3 rounded-full"
                style={{ width: `${d.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}