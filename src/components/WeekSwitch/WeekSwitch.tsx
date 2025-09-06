import { RadioGroup } from '../RadioGroup';
import { Week } from '../../types/Week';
import { ListOption } from '../../types/ListOption';
import { useWeekStore } from '../../store/weekStore';

const WEEKS: ListOption<Week>[] = [
  { label: 'Перший тиждень', value: 'firstWeek' },
  { label: 'Другий тиждень', value: 'secondWeek' },
];

const WeekSwitch = () => {
  const { currentWeek, setCurrentWeek, actualWeek } = useWeekStore();

  return (
    <RadioGroup value={currentWeek} actualValue={actualWeek} options={WEEKS} onChange={setCurrentWeek} fullWidth />
  );
};

export default WeekSwitch;
