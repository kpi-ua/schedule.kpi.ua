import { createContext, useContext, useState } from 'react';

const GroupContext = createContext(null);

export const useGroupContext = () => useContext(GroupContext);

const GroupContextProvider = ({initialValue, children}) => {
  const [group, setGroup] = useState(initialValue);

  const params = {setGroup, group};

  return (
    <GroupContext.Provider value={params}>{children}</GroupContext.Provider>
  );
};

export default GroupContextProvider;