import {
  ScheduleItemTypeLab,
  ScheduleItemTypeLec,
  ScheduleItemTypePrac,
} from '../../components/ScheduleItemContent/ScheduleItemContent.style';

export const SUBJECT_TYPES: Record<
  string,
  { component: React.ComponentType<{ children: React.ReactNode }>; title: string }
> = {
  lec: {
    component: ScheduleItemTypeLec,
    title: 'Лекція',
  },
  lab: {
    component: ScheduleItemTypeLab,
    title: 'Лабораторна',
  },
  prac: {
    component: ScheduleItemTypePrac,
    title: 'Практика',
  },
};
