import { DailyData } from "./types";

export function getCompletedTasks(data: DailyData) {
  return [
    data.task1Done,
    data.task2Done,
    data.task3Done,
  ].filter(Boolean).length;
}

export function getHabitCount(data: DailyData) {
  return [
    data.gym,
    data.reading,
    data.water,
    data.noScroll,
  ].filter(Boolean).length;
}

export function getProductivityScore(data: DailyData) {
  const tasks = getCompletedTasks(data) * 20;

  const habits = getHabitCount(data) * 5;

  const focusMinutes =
    Math.floor(data.focusSeconds / 60);

  const focusScore =
    Math.min(40, Math.floor(focusMinutes / 2));

  return Math.min(
    100,
    tasks + habits + focusScore
  );
}