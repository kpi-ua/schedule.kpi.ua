import { create } from 'zustand';
import { Week } from '../types/Week';

type WeekStore = {
  currentWeek?: Week;
  setCurrentWeek: (week: Week) => void;

  actualWeek?: Week;
  setActualWeek: (week: Week) => void;
};

export const useWeekStore = create<WeekStore>((set) => ({
  currentWeek: undefined,
  setCurrentWeek: (week) => set({ currentWeek: week }),

  actualWeek: undefined,
  setActualWeek: (week) => set({ actualWeek: week }),
}));
