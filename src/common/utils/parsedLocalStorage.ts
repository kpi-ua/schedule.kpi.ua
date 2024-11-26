export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) as any);
  } catch {
    return undefined;
  }
};
