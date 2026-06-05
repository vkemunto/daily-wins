import { DailyData } from "./types";

export function calculateScore(data: DailyData) {
  const taskScore =
    [
      data.task1Done,
      data.task2Done,
      data.task3Done,
    ].filter(Boolean).length * 10;

  const habitScore =
    [
      data.gym,
      data.reading,
      data.water,
      data.noScroll,
    ].filter(Boolean).length * 5;

  const focusScore = Math.min(
    Math.floor(data.focusSeconds / 60),
    60
  );

  return taskScore + habitScore + focusScore;
}