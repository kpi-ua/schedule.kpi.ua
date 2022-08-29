export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    // No `key` local storage item, so return undefined
    return undefined;
  }
};
