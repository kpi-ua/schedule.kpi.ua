export const prepareList = (list) => {
  return list
    .map((item) => ({
      label: item.name,
      value: item.id,
    }))
    .sort((a, b) => {
      return a.label.localeCompare(b.label, "uk")
    });
};
