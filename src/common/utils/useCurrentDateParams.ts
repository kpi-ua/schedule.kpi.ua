import { useEffect, useState } from 'react';
import { getCurrentDateValues } from '@/api/getCurrentDateValues';

export const useCurrentDateParams = () => {
  const [dateParams, setDateParams] = useState({currentWeek: null, currentDay: null, currentLesson: null});

  useEffect(() => {
    getCurrentDateValues()
      .then(({data}) => setDateParams({...data, currentDay: data.currentDay - 1}));
  }, []);

  return dateParams;
};