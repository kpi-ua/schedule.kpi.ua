import { createContext, useContext, useEffect, useState } from 'react';
import { getAllGroups, getAllLecturers } from '../../api/fullList';

const PreloadedListsContext = createContext(null);

export const usePreloadedListContext = () => useContext(PreloadedListsContext);
// TODO add exams here 
export const PreloadedListsContextProvider = ({children}) => {
  const [lists, setLists] = useState({
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