import { createContext, useContext, useEffect, useState } from 'react';
import { ScreenSize } from '../../types/ScreenSize';
import { useScreenSize } from '../hooks/useScreenSize';
import { clamp, inRange, range } from 'lodash-es';

export type Slice = [number, number];

export interface SliceContext {
  slice: Slice;
  setSlice: (slice: Slice) => void;
  setCurrentDay: (currentDay: number) => void;
}

const defaultValue: Slice = [0, 0];

const SliceOptionsContext = createContext<SliceContext>({
  slice: defaultValue,
  setSlice: () => ({}),
  setCurrentDay: () => ({}),
});

export const useSliceOptionsContext = () => useContext(SliceOptionsContext);

interface SliceContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
  initialDay: number;
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

export const SliceContextProvider = ({ children, initialDay }: SliceContextProviderProps) => {
  const { screenSize } = useScreenSize();
  const [slice, setSlice] = useState<Slice>(defaultValue);
  const [currentDay, setCurrentDay] = useState(initialDay);

  useEffect(() => {
    setSlice(getCurrentSlice(screenSize, currentDay));
  }, [screenSize, currentDay]);

  const value: SliceContext = {
    slice,
    setSlice,
    setCurrentDay,
  };

  return (
    <SliceOptionsContext.Provider value={value}>
      {children}
    </SliceOptionsContext.Provider>
  );
};

export default SliceOptionsContext.Provider;