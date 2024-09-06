import React, { createContext, useContext, useState } from 'react';
import { Week } from '../../types/Week';

interface Props {
  initialValue: Week;
  children: React.ReactNode;
}

interface WeekContextType {
  setCurrentWeek: React.Dispatch<React.SetStateAction<Week>>;
  currentWeek: Week;
}

const WeekContext = createContext<WeekContextType>({
  setCurrentWeek: () => {},
  currentWeek: 'firstWeek',
});

export const useWeekContext = () => useContext(WeekContext);

export const WeekContextProvider: React.FC<Props> = ({ initialValue, children }) => {
  const [currentWeek, setCurrentWeek] = useState(initialValue);

  const params: WeekContextType = {setCurrentWeek, currentWeek};

  return (
    <WeekContext.Provider value={params}>
      {children}
    </WeekContext.Provider>
  );
};