'use client';

import { createContext, useContext, useState } from 'react';
import { Week } from '../../types/Week';

interface WeekContextValue {
  currentWeek: Week;
  setCurrentWeek: (week: Week) => void;
}

const WeekContext = createContext<WeekContextValue | undefined>(undefined);

export const useWeekContext = () => {
  const context = useContext(WeekContext);

  if (!context) {
    throw new Error('useWeekContext must be used within a WeekContextProvider');
  }

  return context;
};

interface WeekContextProviderProps {
  initialWeek: Week;
  children: React.ReactNode;
}

// Replaces the old zustand weekStore: seeded once from server-fetched current time,
// then toggled purely client-side (no new fetch on switch — both weeks are in the response already).
export const WeekContextProvider = ({ initialWeek, children }: WeekContextProviderProps) => {
  const [currentWeek, setCurrentWeek] = useState<Week>(initialWeek);

  return <WeekContext.Provider value={{ currentWeek, setCurrentWeek }}>{children}</WeekContext.Provider>;
};
