import React, { createContext, useContext, useEffect, useState } from 'react';

import { Week } from '../../types/Week';
import { isNil } from 'lodash-es';
import { useCurrentTime } from '../../queries/useCurrentTime';

interface Props {
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

export const WeekContextProvider: React.FC<Props> = ({ children }) => {
  const { data } = useCurrentTime();
  const [currentWeek, setCurrentWeek] = useState<Week>('secondWeek');

  useEffect(() => {
    if (!isNil(data?.data.currentWeek)) {
      setCurrentWeek(data?.data.currentWeek === 1 ? "firstWeek" : "secondWeek");
    }
  }, [data?.data.currentWeek]);

  const params: WeekContextType = {setCurrentWeek, currentWeek};

  return (
    <WeekContext.Provider value={params}>
      {children}
    </WeekContext.Provider>
  );
};