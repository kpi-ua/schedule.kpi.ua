import { createContext, useContext, useState, useEffect } from 'react';
import { useCurrentDateParams } from '../utils/useCurrentDateParams';

const WeekContext = createContext(null);

export const useWeekContext = () => useContext(WeekContext);

export const WeekContextProvider = ({children}) => {
  const [currentWeek, setCurrentWeek] = useState(null);
  const currentDateParams = useCurrentDateParams();
  const getWeekByNumber = (week) => {
    if(week === 1){
      return "firstWeek"
    }
    else if (week === 2){
      return "secondWeek"
    }
    return null
  }

  useEffect(() => {
    if(currentDateParams.currentWeek){
      setCurrentWeek(getWeekByNumber(currentDateParams.currentWeek));
    }
  }, [currentDateParams.currentWeek])

  const params = {setCurrentWeek, currentWeek};

  return (
    <WeekContext.Provider value={params}>
      {children}
    </WeekContext.Provider>
  );
};