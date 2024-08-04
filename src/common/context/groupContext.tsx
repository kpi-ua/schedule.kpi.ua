import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode
}

interface GroupContextType {
  group: any;
  setGroup: React.Dispatch<any>;
};


const defaultContext: GroupContextType = {
  group: null,
  setGroup: () => {},
};

const GroupContext = createContext<GroupContextType>(defaultContext);

export const useGroupContext = () => useContext(GroupContext);

export const GroupContextProvider: React.FC<Props> = ({ children }) => {
  const [group, setGroup] = useState<string | null>(null);

  const params: GroupContextType = { setGroup, group };
  
  return <GroupContext.Provider value={params}>{children}</GroupContext.Provider> ;
};
