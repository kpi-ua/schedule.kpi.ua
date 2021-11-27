import { useEffect, useState } from 'react';
import moment from 'moment';

export const useCurrentWeekDay = () => {
  const [currentWeekDay, setCurrentWeekDay] = useState(null);

  useEffect(() => {
    const day = moment().day();

    if (day) {
      setCurrentWeekDay(day - 1);
    }
  }, []);

  return currentWeekDay;
}