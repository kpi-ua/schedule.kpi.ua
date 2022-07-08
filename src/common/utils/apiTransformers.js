import { unique } from "./unique";

export const prepareList = (list) => {
  return unique(
    list.map((item) => ({
      label: item.name,
      value: item.id,
    }))
      .filter(item => item.label !== "" && item.value !== "")
      .sort((a, b) => {
        return a.label.localeCompare(b.label, "uk")
      }),
    (item => item.label));
};
