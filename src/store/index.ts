import {Group} from "../models/Group";
import {Lecturer} from "../models/Lecturer";
import {create} from "zustand";

type Store = {
    group?: Group
    lecturer?: Lecturer
}

type Actions = {
    setGroup: (group?: Group) => void
    setLecturer: (lecturer?: Lecturer) => void
}

export const useStore = create<Store & Actions>((set) => ({
    setGroup: (group) => set({group}),
    setLecturer: (lecturer) => set({lecturer})
}));
