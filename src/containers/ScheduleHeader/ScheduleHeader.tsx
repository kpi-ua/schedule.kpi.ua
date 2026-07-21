import React from 'react';
import { useSliceOptionsContext } from '../../common/context/SliceOptionsContext';

const DAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];

export const ScheduleHeader = () => {
  const { slice } = useSliceOptionsContext();
  const [start, end] = slice;
  const slicedDays = DAYS.slice(start - 1, end);

  return (
    <React.Fragment>
      {slicedDays.map((item) => (
        <div className="z-2 hidden py-6 text-center text-[18px] font-semibold text-primary-font xs:block" key={item}>
          {item}
        </div>
      ))}
    </React.Fragment>
  );
};
