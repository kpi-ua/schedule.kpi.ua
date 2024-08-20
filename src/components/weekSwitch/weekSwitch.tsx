import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { useWeekContext } from "../../common/context/weekContext";
import { Week } from '../../types/Week';
import { ListOption } from '../../types/ListOption';
import { useMemo } from 'react';

interface WeekSwitchProps {
  type: "weeks" | "semesters";
}

const WEEKS: ListOption<Week>[] = [
  { label: "Перший тиждень", value: "firstWeek" },
  { label: "Другий тиждень", value: "secondWeek" },
];

const SEMESTERS: ListOption<Week>[] = [
  { label: "Перший семестр", value: "firstWeek" },
  { label: "Другий семестр", value: "secondWeek" },
];

const WeekSwitch = ({ type }: WeekSwitchProps) => {
  const { setCurrentWeek, currentWeek } = useWeekContext()!;
  const options = useMemo(() => type === "weeks" ? WEEKS : SEMESTERS, [type]);

  return (
    <OptionMultipleToggler
      currentValue={currentWeek}
      options={options}
      onChange={setCurrentWeek}
    />
  );
};

export default WeekSwitch;
