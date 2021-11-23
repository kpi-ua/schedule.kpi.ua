import { createContext, useContext, useState } from "react";

const GroupContext = createContext(null);

export const useGroupContext = () => useContext(GroupContext);

export const GroupContextProvider = ({ initialValue, children }) => {
  const [group, setGroup] = useState(initialValue);

  const params = { setGroup, group };

  return (
    <GroupContext.Provider value={params}>{children}</GroupContext.Provider>
  );
};
