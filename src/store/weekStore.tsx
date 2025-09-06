import { create } from 'zustand';
import { Week } from '../types/Week';

type WeekStore = {
  currentWeek: Week | null;
  setCurrentWeek: (week: Week) => void;
};

export const useWeekStore = create<WeekStore>((set) => ({
  currentWeek: null,
  setCurrentWeek: (week) => set({ currentWeek: week }),
}));
