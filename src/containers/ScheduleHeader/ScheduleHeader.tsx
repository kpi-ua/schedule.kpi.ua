import { WeekDay } from './WeekDay';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';

const DAYS = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П\'ятниця',
  'Субота',
];

export const ScheduleHeader = () => {
  const { slice } = useSliceOptionsContext();
  const [start, end] = slice;
  const slicedDays = DAYS.slice(start - 1, end);

  return (
    <>
      {slicedDays.map(item => (<WeekDay key={item}>{item}</WeekDay>))}
    </>
  );
};
