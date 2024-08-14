import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { useWeekContext } from "../../common/context/weekContext";
import { Week } from '../../types/Week';
import { ListOption } from '../../types/ListOption';

interface WeekSwitchProps {
  type: "weeks" | "semesters";
}

const WeekSwitch = ({ type }: WeekSwitchProps) => {
  const { setCurrentWeek, currentWeek } = useWeekContext()!;

  const updateWeek = (value: Week) => {
    if (value) {
      setCurrentWeek(value);
    }
  };

  const weeks: ListOption<Week>[] = [
    { label: "Перший тиждень", value: "firstWeek" },
    { label: "Другий тиждень", value: "secondWeek" },
  ];

  const semesters: ListOption<Week>[] = [
    { label: "Перший семестр", value: "firstWeek" },
    { label: "Другий семестр", value: "secondWeek" },
  ];

  return (
    <OptionMultipleToggler
      currentValue={currentWeek}
      options={type === "weeks" ? weeks : semesters}
      onChange={updateWeek}
    />
  );
};

export default WeekSwitch;
