export const getTodayKey = () => {
  return new Date().toISOString().split("T")[0];
};

// Read data for a specific day
export const loadDay = (key: string) => {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(key);
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

// Save data for a specific day
export const saveDay = (key: string, data: any) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(key, JSON.stringify(data));
};