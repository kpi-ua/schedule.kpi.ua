import { WeekDay } from './scheduleHeader.style';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';

const DAYS = [
  {label: 'Понеділок', value: 'monday'},
  {label: 'Вівторок', value: 'tuesday'},
  {label: 'Середа', value: 'wednesday'},
  {label: 'Четвер', value: 'thursday'},
  {label: 'П\'ятниця', value: 'friday'},
  {label: 'Субота', value: 'saturday'},
];

const ScheduleHeader = () => {
  const sliceOptions = useSliceOptionsContext();

  const slicedDays = sliceOptions ? DAYS.slice(sliceOptions.start, sliceOptions.end) : DAYS;

  return (
    <>
      {slicedDays.map(item => {
        return <WeekDay key={item.value}>{item.label}</WeekDay>;
      })}
    </>
  );
};

export default ScheduleHeader;