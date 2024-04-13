import { createContext, useContext } from 'react';

const SliceOptionsContext = createContext(null);

export const useSliceOptionsContext = () => useContext(SliceOptionsContext);

export default SliceOptionsContext.Provider;