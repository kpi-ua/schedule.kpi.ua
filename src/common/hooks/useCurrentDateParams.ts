import { useEffect, useState } from 'react';
import { getCurrentDateValues } from '../../api/getCurrentDateValues';
import { CurrentTime } from '../../models/CurrentTime';

export const useCurrentDateParams = () => {
  const [dateParams, setDateParams] = useState<CurrentTime>({
    currentDay: 0,
    currentLesson: 0,
    currentWeek: 0,
  });

  useEffect(() => {
    getCurrentDateValues()
      .then(({ data }) => setDateParams({ ...data, currentDay: data.currentDay }));
  }, []);

  return dateParams;
};