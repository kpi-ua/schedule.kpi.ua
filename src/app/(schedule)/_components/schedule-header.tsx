'use client';

import React from 'react';

import { DAYS_FULL } from '@/lib/constants/common';
import { useSliceOptionsContext } from '@/lib/context/slice-options-context';

export const ScheduleHeader = () => {
  const { slice } = useSliceOptionsContext();
  const [start, end] = slice;
  const slicedDays = DAYS_FULL.slice(start - 1, end);

  return (
    <React.Fragment>
      {slicedDays.map((item) => (
        <div className="z-2 hidden py-6 text-center text-[18px] font-semibold text-primary-font sm:block" key={item}>
          {item}
        </div>
      ))}
    </React.Fragment>
  );
};
