import { EntityWithNameAndId } from '../models/EntityWithNameAndId';
import { Group } from '../models/Group';
import { create } from 'zustand';

type Store = {
  group?: Group;
  lecturer?: EntityWithNameAndId;
};

type Actions = {
  setGroup: (group?: Group) => void;
  setLecturer: (lecturer?: EntityWithNameAndId) => void;
};

export const useStore = create<Store & Actions>((set) => ({
  setGroup: (group) => set({ group }),
  setLecturer: (lecturer) => set({ lecturer }),
}));
