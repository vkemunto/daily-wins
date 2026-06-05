"use client";

import { useEffect, useState } from "react";
import { DailyData } from "../lib/types";

const STORAGE_KEY = "daily-wins-data";

const emptyDay: DailyData = {
  date: new Date().toISOString(),

  bigWin: "",

  task1: "",
  task2: "",
  task3: "",

  task1Done: false,
  task2Done: false,
  task3Done: false,

  focusSeconds: 0,
  sessions: 0,

  gym: false,
  reading: false,
  water: false,
  noScroll: false,

  xp: 0,
  level: 1,
};

export function useDailyData() {
  const [data, setData] = useState<DailyData>(emptyDay);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  }, [data]);

  return {
    data,
    setData,
  };
}