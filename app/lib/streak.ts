import { calculateScore } from "./scoring";
import { DailyData } from "./types";

export function shouldIncrementStreak(data: DailyData) {
  const { total } = calculateScore(data);
  return total >= 70;
}

export function updateStreak(current: number, data: DailyData) {
  const goodDay = shouldIncrementStreak(data);

  if (goodDay) return current + 1;
  return 0;
}