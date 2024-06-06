import { createContext, useContext } from 'react';

const SliceOptionsContext = createContext<{start: number, end: number} | null>(null);

export const useSliceOptionsContext = () => useContext(SliceOptionsContext);

export default SliceOptionsContext.Provider;