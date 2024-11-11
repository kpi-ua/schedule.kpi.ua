import { RadioGroup } from '../RadioGroup';
import { Week } from '../../types/Week';
import { ListOption } from '../../types/ListOption';
import { useMemo } from 'react';
import {useWeekStore} from "../../store/weekStore";

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
  const {currentWeek, setCurrentWeek} = useWeekStore();
  const options = useMemo(() => type === "weeks" ? WEEKS : SEMESTERS, [type]);

  return (
    <RadioGroup
      value={currentWeek}
      options={options}
      onChange={setCurrentWeek}
      fullWidth
    />
  );
};

export default WeekSwitch;
