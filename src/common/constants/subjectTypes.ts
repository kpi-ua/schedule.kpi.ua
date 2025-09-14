import { SubjectType } from '../../models/Pair';

export const SUBJECT_TYPES: Record<SubjectType, string> = {
  [SubjectType.Lab]: 'Лабораторна',
  [SubjectType.Lecture]: 'Лекція',
  [SubjectType.Practice]: 'Практика',
};
