"use client";

type DailyPlannerProps = {
  data: any;
  setData: (data: any) => void;
};

export default function DailyPlanner({
  data,
  setData,
}: DailyPlannerProps) {

  const update = (field: string, value: any) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-3xl font-bold mb-6">
        🎯 Daily Planner
      </h2>

      <input
        value={data.bigWin || ""}
        onChange={(e) => update("bigWin", e.target.value)}
        placeholder="Today's Big Win"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        value={data.task1 || ""}
        onChange={(e) => update("task1", e.target.value)}
        placeholder="Task 1"
        className="w-full border p-3 rounded-xl mb-2"
      />

      <label className="flex gap-2 mb-4">
        <input
          type="checkbox"
          checked={data.task1Done || false}
          onChange={() => update("task1Done", !data.task1Done)}
        />
        Completed
      </label>

      <input
        value={data.task2 || ""}
        onChange={(e) => update("task2", e.target.value)}
        placeholder="Task 2"
        className="w-full border p-3 rounded-xl mb-2"
      />

      <label className="flex gap-2 mb-4">
        <input
          type="checkbox"
          checked={data.task2Done || false}
          onChange={() => update("task2Done", !data.task2Done)}
        />
        Completed
      </label>

      <input
        value={data.task3 || ""}
        onChange={(e) => update("task3", e.target.value)}
        placeholder="Task 3"
        className="w-full border p-3 rounded-xl mb-2"
      />

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={data.task3Done || false}
          onChange={() => update("task3Done", !data.task3Done)}
        />
        Completed
      </label>

    </div>
  );
}