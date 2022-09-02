import { useEffect, useState } from 'react';
import { getCurrentValues } from 'api/getCurrentValues';

const useCurrentDateParams = () => {
  const [dateParams, setDateParams] = useState({currentWeek: null, currentDay: null, currentLesson: null});

  useEffect(() => {
    getCurrentValues()
      .then(data => setDateParams(data.data));
  }, []);

  return dateParams;
};

export default useCurrentDateParams;