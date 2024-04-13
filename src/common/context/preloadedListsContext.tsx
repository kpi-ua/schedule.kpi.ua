import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllGroups, getAllLecturers } from '@/api/fullList';

interface Props {
  children: React.ReactNode,
}

interface ContextType {
  groups: any[],
  lecturers: any[],
}

const PreloadedListsContext = createContext<ContextType | null>(null);

export const usePreloadedListContext = () => useContext(PreloadedListsContext);
// TODO add exams here 
export const PreloadedListsContextProvider: React.FC<Props> = ({children}) => {
  const [lists, setLists] = useState<ContextType>({
    groups: [],
    lecturers: [],
  });

  const promises = [getAllGroups(), getAllLecturers()];

  useEffect(() => {
    Promise.all(promises)
      .then(([groups, lecturers]) => {
        setLists({
          groups: groups.data,
          lecturers: lecturers.data,
        });
      });
  }, []);

  return (
    <PreloadedListsContext.Provider value={lists}>{children}</PreloadedListsContext.Provider>
  );
};