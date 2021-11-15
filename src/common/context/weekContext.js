import { createContext, useContext, useState } from 'react';

const WeekContext = createContext(null);

export const useWeekContext = () => useContext(WeekContext);

export const WeekContextProvider = ({initialValue, children}) => {
  const [currentWeek, setCurrentWeek] = useState(initialValue);

  const params = {setCurrentWeek, currentWeek};

  return (
    <WeekContext.Provider value={params}>
      {children}
    </WeekContext.Provider>
  );
};