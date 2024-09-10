import { AnyStyledComponent } from "styled-components";
import {
  ScheduleItemTypeLab,
  ScheduleItemTypeLec,
  ScheduleItemTypePrac,
} from "../../components/scheduleItemContent/scheduleItemContent.style";

export const SUBJECT_TYPES: Record<string, { component: AnyStyledComponent; title: string }> =
  {
    lec: {
      component: ScheduleItemTypeLec,
      title: "Лекція",
    },
    lab: {
      component: ScheduleItemTypeLab,
      title: "Лабораторна",
    },
    prac: {
      component: ScheduleItemTypePrac,
      title: "Практика",
    },
  };
