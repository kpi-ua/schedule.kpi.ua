import { ScheduleItemTypeLab, ScheduleItemTypeLec, ScheduleItemTypePrac } from "../../components/scheduleItemContent/scheduleItemContent.style";

export const SUBJECT_TYPES = {
    lec: {
        component: ScheduleItemTypeLec,
        title: "Лек"
    },
    lab: {
        component: ScheduleItemTypeLab,
        title: "Лаб"
    },
    prac: {
        component: ScheduleItemTypePrac,
        title: "Прак"
    },
}