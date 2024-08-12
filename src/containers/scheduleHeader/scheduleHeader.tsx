import { WeekDay } from './scheduleHeader.style';
import { useSliceOptionsContext } from '../../common/context/sliceOptionsContext';
import React from 'react';

const ScheduleHeader = () => {
  const sliceOptions = useSliceOptionsContext();

  const days = [
    {label: 'Понеділок', value: 'monday'},
    {label: 'Вівторок', value: 'tuesday'},
    {label: 'Середа', value: 'wednesday'},
    {label: 'Четвер', value: 'thursday'},
    {label: 'П\'ятниця', value: 'friday'},
    {label: 'Субота', value: 'saturday'},
  ];

  const slicedDays = sliceOptions ? days.slice(sliceOptions.start, sliceOptions.end) : days;

  const renderedWeekDays = slicedDays.map(item => {
    return <WeekDay key={item.value}>{item.label}</WeekDay>;
  });

  return (
    <>
      {renderedWeekDays}
    </>
  );
};

export default ScheduleHeader;