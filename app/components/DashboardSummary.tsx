"use client";

import { DailyData } from "../lib/types";
import {
  getCompletedTasks,
  getProductivityScore,
} from "../lib/helpers";

type Props = {
  data: DailyData;
};

export default function DashboardSummary({
  data,
}: Props) {
  const completed =
    getCompletedTasks(data);

  const score =
    getProductivityScore(data);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">

      <h2 className="text-3xl font-bold mb-6">
        📈 Today's Progress
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-slate-100 p-4 rounded-xl">
          <p>Tasks</p>

          <p className="text-3xl font-bold">
            {completed}/3
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded-xl">
          <p>Focus</p>

          <p className="text-3xl font-bold">
            {Math.floor(
              data.focusSeconds / 60
            )} min
          </p>
        </div>

        <div className="bg-slate-100 p-4 rounded-xl">
          <p>Score</p>

          <p className="text-3xl font-bold">
            {score}
          </p>
        </div>

      </div>

    </div>
  );
}