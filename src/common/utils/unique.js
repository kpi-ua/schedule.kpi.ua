export const unique = (array, getComparingItem = (item) => item) => {
  const uniqueFilter = (value, index, self) => {
    return self.map(e => getComparingItem(e)).indexOf(getComparingItem(value)) === index;
  };

  return [...array.filter(uniqueFilter)];
};