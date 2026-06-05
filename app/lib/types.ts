export type DailyData = {
  date: string;

  bigWin: string;

  task1: string;
  task2: string;
  task3: string;

  task1Done: boolean;
  task2Done: boolean;
  task3Done: boolean;

  focusSeconds: number;
  sessions: number;

  gym: boolean;
  reading: boolean;
  water: boolean;
  noScroll: boolean;

  xp: number;
  level: number;
};