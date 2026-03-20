export const setLocalStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = <T = unknown>(key: string): T | undefined => {
  const value = localStorage.getItem(key);
  if (value === null) return undefined;

  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
};
