'use client';

import { clamp, inRange, isNil, range } from 'lodash-es';
import { createContext, useContext, useEffect, useState } from 'react';

import { ScreenSize } from '../../types/ScreenSize';
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
  currentDay?: number;
  children: React.ReactNode | React.ReactNode[];
}

const DAYS_COUNT = 6;

const ScreenSizeSlicesCount: Record<ScreenSize, number> = {
  [ScreenSize.Big]: 1,
  [ScreenSize.Medium]: 2,
  [ScreenSize.Small]: 3,
  [ScreenSize.ExtraSmall]: 6,
};

const generateSlices = (screenSize: ScreenSize): Slice[] => {
  const numberOfSlices = ScreenSizeSlicesCount[screenSize];
  const sliceRange = DAYS_COUNT / numberOfSlices;

  return range(0, numberOfSlices).map((index) => [sliceRange * index + 1, sliceRange * index + sliceRange]);
};

const getCurrentSlice = (screenSize: ScreenSize, currendDay: number): Slice => {
  const slices = generateSlices(screenSize);

  return slices.find(([start, end]) => inRange(clamp(currendDay, 1, DAYS_COUNT), start, end + 1)) || defaultValue;
};

export const SliceContextProvider = ({ currentDay, children }: SliceContextProviderProps) => {
  const { screenSize } = useScreenSize();
  // Seed synchronously from server-known currentDay so the SSR/first paint already shows the
  // right day range, instead of the [0,0] default until the client effect below runs.
  const [slice, setSlice] = useState<Slice>(() =>
    isNil(currentDay) ? defaultValue : getCurrentSlice(screenSize, currentDay),
  );

  useEffect(() => {
    if (!isNil(currentDay)) {
      setSlice(getCurrentSlice(screenSize, currentDay));
    }
  }, [screenSize, currentDay]);

  const value: SliceContext = {
    slice,
    setSlice,
  };

  return <SliceOptionsContext.Provider value={value}>{children}</SliceOptionsContext.Provider>;
};
