import { unique } from "./unique";

export const prepareList = (list: {label: string, value: string, name: string, id: string}[]): {label: string, value: string}[] => {
  return unique(
    list.map((item: {name: string, id: string}) => ({
      label: item.name,
      value: item.id,
    }))
      .filter((item: {label: string, value: string}) => item.label !== "" && item.value !== "")
      .sort((a, b) => {
        return a.label.localeCompare(b.label, "uk")
      }),
    (item => item.label));
};
