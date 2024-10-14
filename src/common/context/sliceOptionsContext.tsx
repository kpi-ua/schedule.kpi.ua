import { clamp, inRange, isNil, range } from 'lodash-es';
import { createContext, useContext, useEffect, useState } from 'react';

import { ScreenSize } from '../../types/ScreenSize';
import { useCurrentTime } from '../../queries/useCurrentTime';
import { useScreenSize } from '../hooks/useScreenSize';

export type Slice = [number, number];

export interface SliceContext {
  slice: Slice;
  setSlice: (slice: Slice) => void;
}

const defaultValue: Slice = [0, 0];

const SliceOptionsContext = createContext<SliceContext>({
  slice: defaultValue,
  setSlice: () => ({}),
});

export const useSliceOptionsContext = () => useContext(SliceOptionsContext);

interface SliceContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const DAYS_COUNT = 6;

const ScreenSizeSlicesCount: Record<ScreenSize, number> = {
  [ScreenSize.Big]: 1,
  [ScreenSize.Medium]: 2,
  [ScreenSize.Small]: 3,
  [ScreenSize.ExtraSmall]: 6
};

const generateSlices = (screenSize: ScreenSize): Slice[] => {
  const numberOfSlices = ScreenSizeSlicesCount[screenSize];
  const sliceRange = DAYS_COUNT / numberOfSlices;

  return range(0, numberOfSlices).map(
    (index) => ([sliceRange * index + 1, sliceRange * index + sliceRange])
  );
};

const getCurrentSlice = (screenSize: ScreenSize, currendDay: number): Slice => {
  const slices = generateSlices(screenSize);

  return slices.find(([start, end]) => inRange(clamp(currendDay, 1, DAYS_COUNT) , start, end + 1)) || defaultValue;
};

export const SliceContextProvider = ({ children }: SliceContextProviderProps) => {
  const { data } = useCurrentTime();
  const { screenSize } = useScreenSize();
  const [slice, setSlice] = useState<Slice>(defaultValue);

  useEffect(() => {
    if (!isNil(data?.data.currentDay)) {
      setSlice(getCurrentSlice(screenSize, data?.data.currentDay || 0));
    }
  }, [screenSize, data?.data.currentDay]);

  const value: SliceContext = {
    slice,
    setSlice,
  };

  return (
    <SliceOptionsContext.Provider value={value}>
      {children}
    </SliceOptionsContext.Provider>
  );
};

export default SliceOptionsContext.Provider;