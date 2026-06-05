import { calculateScore } from "./scoring";
import { DailyData } from "./types";

export function shouldIncrementStreak(data: DailyData) {
  const total = calculateScore(data);
  return total >= 70;
}