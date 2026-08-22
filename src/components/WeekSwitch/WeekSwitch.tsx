import { Week } from '../../types/Week';
import { ListOption } from '../../types/ListOption';
import { useWeekStore } from '../../store/weekStore';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

const WEEKS: ListOption<Week>[] = [
  { label: 'Перший тиждень', value: 'firstWeek' },
  { label: 'Другий тиждень', value: 'secondWeek' },
];

const WeekSwitch = () => {
  const { currentWeek, setCurrentWeek } = useWeekStore();

  return (
    <Tabs value={currentWeek} onValueChange={(value) => setCurrentWeek(value as Week)} className="w-full">
      <TabsList className="h-full" segmented>
        {WEEKS.map((week) => (
          <TabsTrigger className="justify-center" key={week.value} value={week.value} data-text={week.label} segmented>
            {week.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default WeekSwitch;
