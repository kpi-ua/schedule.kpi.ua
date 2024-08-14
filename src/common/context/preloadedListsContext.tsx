import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllGroups, getAllLecturers } from "../../api/fullList";
import { Group } from '../../models/Group';
import { Lecturer } from '../../models/Lecturer';

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  groups: Group[];
  lecturers: Lecturer[];
}

const PreloadedListsContext = createContext<ContextType>({
  groups: [],
  lecturers: [],
});

export const usePreloadedListContext = () => useContext(PreloadedListsContext);

// TODO: add exams here
export const PreloadedListsContextProvider: React.FC<Props> = ({
  children,
}) => {
  const [lists, setLists] = useState<ContextType>({
    groups: [],
    lecturers: [],
  });

  useEffect(() => {
    Promise.all([getAllGroups(), getAllLecturers()]).then(([groups, lecturers]) => {
      setLists({
        groups: groups.data,
        lecturers: lecturers.data,
      });
    });
  }, []);

  return (
    <PreloadedListsContext.Provider value={lists}>
      {children}
    </PreloadedListsContext.Provider>
  );
};
