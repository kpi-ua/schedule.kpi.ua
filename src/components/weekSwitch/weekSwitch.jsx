import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { useWeekContext } from "../../common/context/weekContext";
import { useEffect, useState } from "react";

const WeekSwitch = () => {
  const { setCurrentWeek, currentWeek } = useWeekContext();

  const updateWeek = (value) => {
    if (value) {
      setCurrentWeek(value);
    }
  };
  const weeks = [
    { label: "Перший тиждень", value: "firstWeek" },
    { label: "Другий тиждень", value: "secondWeek" },
  ];
  return (
    <OptionMultipleToggler
      initialValue={currentWeek}
      options={weeks}
      onOptionChange={updateWeek}
    />
  );
};

export default WeekSwitch;
