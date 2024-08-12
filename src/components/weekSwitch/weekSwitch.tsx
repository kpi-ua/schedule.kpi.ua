import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { useWeekContext } from "../../common/context/weekContext";

interface WeekSwitchProps {
  type: "weeks" | "semesters";
}

const WeekSwitch = ({ type }: WeekSwitchProps) => {
  const { setCurrentWeek, currentWeek } = useWeekContext()!;

  const updateWeek = (value: string | null) => {
    if (value) {
      setCurrentWeek(value);
    }
  };

  const weeks = [
    { label: "Перший тиждень", value: "firstWeek" },
    { label: "Другий тиждень", value: "secondWeek" },
  ];

  const semesters = [
    { label: "Перший семестр", value: "firstWeek" },
    { label: "Другий семестр", value: "secondWeek" },
  ];
  return (
    <OptionMultipleToggler
      initialValue={currentWeek}
      options={type === "weeks" ? weeks : semesters}
      onOptionChange={updateWeek}
    />
  );
};

export default WeekSwitch;
