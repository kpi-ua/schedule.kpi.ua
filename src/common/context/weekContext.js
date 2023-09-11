import { createContext, useContext, useState, useEffect } from 'react';

const WeekContext = createContext(null);

export const useWeekContext = () => useContext(WeekContext);

export const WeekContextProvider = ({initialValue, children}) => {
  const [currentWeek, setCurrentWeek] = useState(null);

  useEffect(() => {
    setCurrentWeek(initialValue === 0 ? 'firstWeek' : 'secondWeek');
  }, [initialValue]);

  const params = {setCurrentWeek, currentWeek};

  return (
    <WeekContext.Provider value={params}>
      {children}
    </WeekContext.Provider>
  );
};
