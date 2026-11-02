'use client';

import { DAY_OPTIONS, DaysRange } from '@/lib/constants/common';
import { Slice, useSliceOptionsContext } from '@/lib/context/slice-options-context';
import { useScreenSize } from '@/lib/hooks/use-screen-size';

import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export const DayToggle = () => {
  const { screenSize } = useScreenSize();
  const { slice, setSlice } = useSliceOptionsContext();

  const options = DAY_OPTIONS[screenSize];

  if (!options) {
    return null;
  }

  const handleChange = (value: DaysRange) => {
    const [start, end] = value.split('-');

    setSlice([+start, +end]);
  };

  const convertSlice = ([start, end]: Slice): DaysRange => `${start}-${end}`;

  return (
    <div className="m-4">
      <Tabs value={convertSlice(slice)} onValueChange={(value) => handleChange(value as DaysRange)} className="w-full">
        <TabsList segmented rounded>
          {options.map((option) => (
            <TabsTrigger key={option.value} value={option.value} data-text={option.label} segmented rounded>
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
