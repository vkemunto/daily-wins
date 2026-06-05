import { DailyData } from "./types";

export function calculateScore(data: DailyData) {
  const taskScore =
    [
      data.tasks.task1Done,
      data.tasks.task2Done,
      data.tasks.task3Done,
    ].filter(Boolean).length * 10;

  const habitScore =
    [
      data.habits.gym,
      data.habits.reading,
      data.habits.water,
      data.habits.noScroll,
    ].filter(Boolean).length * 7.5;

  const focusScore = Math.min(
    Math.floor(data.focus.seconds / 60),
    60
  ) * 0.5;

  const total = Math.min(
    Math.round(taskScore + habitScore + focusScore),
    100
  );

  return {
    taskScore,
    habitScore,
    focusScore,
    total,
  };
}