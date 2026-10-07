import type { OnsOccurrence, OnsScheduleOccurrences } from '../../models/OnsScheduleOccurrences';
import type { StudentSchedule } from '../../models/StudentSchedule';
import type { StudentPair } from '../../models/StudentPair';

const ONS_NAMES = new Set([
  'Основи національного спротиву',
  'Теоретична підготовка базової загальновійськової підготовки',
]);
const occurrenceKey = (name: string, tag: string, time: string, date: string) =>
  JSON.stringify([name, tag, time, date]);
const validTime = (time: unknown) => typeof time === 'string' && /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(time);
const validDate = (date: unknown) => {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const value = new Date(`${date}T00:00:00Z`);
  return Number.isFinite(value.valueOf()) && value.toISOString().slice(0, 10) === date;
};

export const isNumericGroupId = (id?: string) => !!id && /^\d{1,10}$/.test(id) && Number(id) > 0;

export const parseOnsOccurrences = (value: unknown, groupId: string): OnsScheduleOccurrences => {
  if (typeof value !== 'object' || value === null) throw new Error('Invalid schedule metadata');
  const data = value as OnsScheduleOccurrences;
  if (
    data.groupId !== groupId ||
    !Number.isInteger(data.academicYear) ||
    data.academicYear < 2000 ||
    data.academicYear > 2100 ||
    !Array.isArray(data.occurrences) ||
    data.occurrences.length > 256
  )
    throw new Error('Invalid schedule metadata scope');
  for (const item of data.occurrences) {
    if (
      !item ||
      !Number.isInteger(item.id) ||
      item.id <= 0 ||
      !ONS_NAMES.has(item.name) ||
      item.tag !== 'lec' ||
      !validDate(item.date) ||
      !validTime(item.time) ||
      !validTime(item.endTime) ||
      !Array.isArray(item.lecturers) ||
      item.lecturers.length > 32 ||
      item.lecturers.some(
        (lecturer) =>
          !lecturer ||
          typeof lecturer.id !== 'string' ||
          !/^[a-f0-9]{64}$/.test(lecturer.id) ||
          typeof lecturer.name !== 'string' ||
          !lecturer.name.trim() ||
          lecturer.name.length > 256,
      )
    )
      throw new Error('Invalid schedule occurrence');
    if (item.location !== null) {
      if (!item.location || item.location.title !== 'Zoom' || typeof item.location.uri !== 'string')
        throw new Error('Invalid occurrence location');
      const url = new URL(item.location.uri);
      if (
        url.protocol !== 'https:' ||
        url.username ||
        url.password ||
        url.port ||
        !/(^|\.)zoom\.us$/i.test(url.hostname) ||
        !/^\/j\/\d+$/.test(url.pathname)
      )
        throw new Error('Invalid meeting URL');
    }
  }
  return data;
};

export const hasDatedOns = (schedule?: StudentSchedule) =>
  !!schedule &&
  [...schedule.scheduleFirstWeek, ...schedule.scheduleSecondWeek].some((day) =>
    day.pairs.some((pair) => ONS_NAMES.has(pair.name) && pair.tag === 'lec' && pair.dates.length > 0),
  );

/** Match actual occurrences; never carry a meeting URL to another date or group. */
export const supplementOnsSchedule = (
  schedule: StudentSchedule,
  metadata?: OnsScheduleOccurrences,
): StudentSchedule => {
  if (!metadata || metadata.groupId !== schedule.groupCode) return schedule;
  const index = new Map<string, OnsOccurrence[]>();
  for (const item of metadata.occurrences) {
    const key = occurrenceKey(item.name, item.tag, item.time, item.date);
    index.set(key, [...(index.get(key) ?? []), item]);
  }
  const supplement = (pair: StudentPair): StudentPair[] => {
    if (!ONS_NAMES.has(pair.name) || pair.tag !== 'lec' || !pair.dates.length) return [pair];
    const pieces: StudentPair[] = [];
    let applied = false;
    for (const date of pair.dates) {
      const candidates = index.get(occurrenceKey(pair.name, pair.tag, pair.time, date)) ?? [];
      const fingerprints = new Set(
        candidates.map((item) => JSON.stringify([item.lecturers, item.location, item.endTime])),
      );
      // Disagreeing records cannot be assigned to this public card unambiguously.
      const source = fingerprints.size === 1 ? candidates[0] : undefined;
      // The occurrence teacher may not have an annual Campus schedule; don't offer a broken lecturer-page link.
      const lecturer = source?.lecturers.length
        ? { id: '', name: source.lecturers.map((item) => item.name).join(', ') }
        : pair.lecturer;
      const location = source?.location ?? pair.location;
      if (source && (source.lecturers.length || source.location)) applied = true;
      const existing = pieces.find(
        (item) => JSON.stringify([item.lecturer, item.location]) === JSON.stringify([lecturer, location]),
      );
      if (existing) existing.dates.push(date);
      else pieces.push({ ...pair, lecturer, location, dates: [date] });
    }
    return applied ? pieces : [pair];
  };
  const supplementWeek = (week: StudentSchedule['scheduleFirstWeek']) =>
    week.map((day) => ({ ...day, pairs: day.pairs.flatMap(supplement) }));
  return {
    ...schedule,
    scheduleFirstWeek: supplementWeek(schedule.scheduleFirstWeek),
    scheduleSecondWeek: supplementWeek(schedule.scheduleSecondWeek),
  };
};
