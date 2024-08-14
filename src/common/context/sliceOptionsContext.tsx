import { createContext, useContext } from 'react';

export interface Slice {
  start?: number;
  end?: number;
}

const SliceOptionsContext = createContext<Slice>({});

export const useSliceOptionsContext = () => useContext(SliceOptionsContext);

export default SliceOptionsContext.Provider;