import { create } from 'zustand';
import { Week } from '../types/Week';

type WeekStore = {
  currentWeek: Week;
  setCurrentWeek: (week: Week) => void;
};

export const useWeekStore = create<WeekStore>((set) => ({
  currentWeek: 'secondWeek',
  setCurrentWeek: (week) => set({ currentWeek: week }),
}));
