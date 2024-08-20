import React, { createContext, useContext, useState } from "react";
import { Group } from '../../models/Group';

interface Props {
  children: React.ReactNode
}

interface GroupContextType {
  group?: Group;
  setGroup: React.Dispatch<React.SetStateAction<Group | undefined>>;
};

const GroupContext = createContext<GroupContextType>({
  setGroup: () => {},
});

export const useGroupContext = () => useContext(GroupContext);

export const GroupContextProvider: React.FC<Props> = ({ children }) => {
  const [group, setGroup] = useState<Group>();

  const params: GroupContextType = { setGroup, group };
  
  return <GroupContext.Provider value={params}>{children}</GroupContext.Provider> ;
};
