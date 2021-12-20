export const prepareList = (list) => {
  console.dir(list)
  return list
    .map((item) => ({
      label: item.name,
      value: item.id,
    }))
    .sort((a, b) => {
      if (a.label.toUpperCase() < b.label.toUpperCase()) {
        return -1;
      }
      if (a.label.toUpperCase() > b.label.toUpperCase()) {
        return 1;
      }
      return 0;
    });
};
