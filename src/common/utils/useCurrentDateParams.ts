import { useEffect, useState } from 'react';
import { getCurrentDateValues } from '../../api/getCurrentDateValues';
import { CurrentTime } from '../../models/CurrentTime';

export const useCurrentDateParams = () => {
  const [dateParams, setDateParams] = useState<CurrentTime>({
    currentDay: -1,
    currentLesson: -1,
    currentWeek: -1,
  });

  useEffect(() => {
    getCurrentDateValues()
      .then(({ data }) => setDateParams({ ...data, currentDay: data.currentDay }));
  }, []);

  return dateParams;
};