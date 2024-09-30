import React, { createContext, useContext, useState } from "react";

import { Group } from '../../models/Group';
import { SelectableEntityProvider } from './types';

interface Props {
  children: React.ReactNode
}

interface GroupContextType extends SelectableEntityProvider<Group> {
};

const GroupContext = createContext<GroupContextType>({
  setItem: () => {},
});

export const useGroupContext = () => useContext(GroupContext);

export const GroupContextProvider: React.FC<Props> = ({ children }) => {
  const [group, setGroup] = useState<Group>();

  const params: GroupContextType = { item: group, setItem: setGroup };
  
  return <GroupContext.Provider value={params}>{children}</GroupContext.Provider> ;
};
