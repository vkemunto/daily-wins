import { DailyData } from "./types";

export function calculateScore(data: DailyData) {
  const taskScore =
    [data.task1Done, data.task2Done, data.task3Done].filter(Boolean).length * 10;

  const habitScore =
    [data.gym, data.reading, data.water, data.noScroll].filter(Boolean).length * 5;

  const sessionScore = data.sessions * 20;

  const total = taskScore + habitScore + sessionScore;

  return {
    total,
    taskScore,
    habitScore,
    sessionScore,
  };
}