export const pluralizeDays = (value: number) => {
  if (value === 1) {
    return 'день';
  }

  if (value > 1 && value < 5) {
    return 'дні';
  }

  return 'днів';
};
