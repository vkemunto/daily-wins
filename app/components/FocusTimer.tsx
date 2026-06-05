"use client";

import { useEffect, useState } from "react";

type FocusTimerProps = {
  data: any;
  setData: (data: any) => void;
};

export default function FocusTimer({
  data,
  setData,
}: FocusTimerProps) {
  const [running, setRunning] = useState(false);

  const seconds = data.focusSeconds || 0;
  const sessions = data.sessions || 0;

  // TIMER LOOP
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (running) {
      interval = setInterval(() => {
        setData({
          ...data,
          focusSeconds: (data.focusSeconds || 0) + 1,
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, data, setData]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const totalMinutes = Math.floor(seconds / 60);

  const completeSession = () => {
    setData({
      ...data,
      sessions: (data.sessions || 0) + 1,
      focusSeconds: 0,
    });

    setRunning(false);
  };

  const resetTimer = () => {
    setData({
      ...data,
      focusSeconds: 0,
    });

    setRunning(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border p-6">

      <h2 className="text-3xl font-bold mb-2">
        ⏱ Focus Timer
      </h2>

      <p className="text-slate-500 mb-6">
        Deep work tracking
      </p>

      {/* TIME */}
      <div className="text-5xl font-mono font-bold text-center mb-6">
        {formatTime(seconds)}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-slate-50 p-4 rounded-2xl text-center">
          <p className="text-slate-500 text-sm">Minutes</p>
          <p className="text-2xl font-bold text-indigo-600">
            {totalMinutes}
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl text-center">
          <p className="text-slate-500 text-sm">Sessions</p>
          <p className="text-2xl font-bold text-green-600">
            {sessions}
          </p>
        </div>

      </div>

      {/* CONTROLS */}
      <div className="grid grid-cols-3 gap-3">

        <button
          onClick={() => setRunning(!running)}
          className="bg-indigo-600 text-white py-3 rounded-xl font-semibold"
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={resetTimer}
          className="border py-3 rounded-xl font-semibold"
        >
          Reset
        </button>

        <button
          onClick={completeSession}
          className="bg-green-600 text-white py-3 rounded-xl font-semibold"
        >
          Finish
        </button>

      </div>

    </div>
  );
}