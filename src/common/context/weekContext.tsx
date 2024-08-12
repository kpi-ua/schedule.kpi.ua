import React, { createContext, useContext, useState } from 'react';

interface Props {
  initialValue: any,
  children: React.ReactNode,
}

interface ContextProps {
  setCurrentWeek: React.Dispatch<any>,
  currentWeek: any,
}

const defaultContext: ContextProps = {
  setCurrentWeek: () => {},
  currentWeek: 0,
};

const WeekContext = createContext<ContextProps>(defaultContext);

export const useWeekContext = () => useContext(WeekContext);

export const WeekContextProvider: React.FC<Props> = ({initialValue, children}) => {
  const [currentWeek, setCurrentWeek] = useState(initialValue);

  const params = {setCurrentWeek, currentWeek};

  return (
    <WeekContext.Provider value={params}>
      {children}
    </WeekContext.Provider>
  );
};