import React, { createContext, useContext, useState } from "react";

interface Props {
  initialValue?: any,
  children: React.FC
}

interface GroupContextType {
  group: any;
  setGroup: React.Dispatch<any>;
};

const GroupContext = createContext<GroupContextType | null>( null);

export const useGroupContext = () => useContext(GroupContext);

export const GroupContextProvider: React.FC<Props> = ({ initialValue = null, children }) => {
  const [group, setGroup] = useState(initialValue);

  const params: GroupContextType = { setGroup, group };
  
  return <GroupContext.Provider value={params}>{children}</GroupContext.Provider> ;
};
