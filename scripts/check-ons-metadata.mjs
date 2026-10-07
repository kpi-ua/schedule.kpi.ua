import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'src/common/utils/onsSchedule.ts'), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});
const { parseOnsOccurrences, supplementOnsSchedule, hasDatedOns, isNumericGroupId } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);
let checks = 0;
const equal = (actual, expected) => { assert.deepEqual(actual, expected); checks++; };
const rejects = (fn) => { assert.throws(fn); checks++; };
const ons = 'Основи національного спротиву';
const teacher = { id: 'a'.repeat(64), name: 'Викладач події' };
const url = 'https://us02web.zoom.us/j/123456789?pwd=fixture.1&omn=987654321';
const occurrence = {
  id: 1, name: ons, tag: 'lec', date: '2026-10-07', time: '08:30:00', endTime: '10:05:00',
  lecturers: [teacher], location: { title: 'Zoom', uri: url },
};
const metadata = { groupId: '6078', academicYear: 2026, occurrences: [occurrence] };
const pair = { name: ons, tag: 'lec', type: 'Лек', time: '08:30:00', dates: ['2026-10-07'], lecturer: null, location: null };
const ordinary = { ...pair, name: 'Фізика', dates: [], lecturer: { id: 'b'.repeat(64), name: 'Звичайний викладач' } };
const schedule = { groupCode: '6078', scheduleFirstWeek: [], scheduleSecondWeek: [{ day: 'Ср', pairs: [pair, ordinary] }] };
const copy = (x) => JSON.parse(JSON.stringify(x));
equal(parseOnsOccurrences(metadata, '6078'), metadata);
equal(isNumericGroupId('6078'), true);
equal(isNumericGroupId('0'), false);
equal(isNumericGroupId('guid-old-group'), false);
equal(hasDatedOns(schedule), true);
equal(hasDatedOns(undefined), false);
rejects(() => parseOnsOccurrences(metadata, '6629'));
for (const change of [
  { date: '2026-02-31' }, { date: '2026-13-01' }, { time: '99:30:00' },
  { lecturers: [{ id: 'bad', name: 'Name' }] }, { lecturers: [{ id: teacher.id, name: '' }] },
  { name: 'Other discipline' }, { tag: 'lab' }, { id: -1 },
  { location: { title: 'Zoom', uri: 'javascript:alert(1)' } },
  { location: { title: 'Zoom', uri: 'https://zoom.us.evil.example/j/123' } },
  { location: { title: 'Zoom', uri: 'https://user@zoom.us/j/123' } },
]) rejects(() => parseOnsOccurrences({ ...metadata, occurrences: [{ ...occurrence, ...change }] }, '6078'));
rejects(() => parseOnsOccurrences({ ...metadata, occurrences: Array(257).fill(occurrence) }, '6078'));
const before = JSON.stringify(schedule);
const result = supplementOnsSchedule(schedule, metadata);
equal(result.scheduleSecondWeek[0].pairs[0].lecturer, { id: '', name: teacher.name });
equal(result.scheduleSecondWeek[0].pairs[0].location.uri, url);
equal(result.scheduleSecondWeek[0].pairs[1], ordinary);
equal(JSON.stringify(schedule), before);
equal(supplementOnsSchedule(schedule), schedule);
equal(supplementOnsSchedule(schedule, { ...metadata, groupId: '6629' }), schedule);
for (const change of [{ date: '2026-10-08' }, { time: '10:25:00' }, { tag: 'lab' }, { name: 'Other discipline' }]) {
  equal(supplementOnsSchedule(schedule, { ...metadata, occurrences: [{ ...occurrence, ...change }] }).scheduleSecondWeek[0].pairs[0], pair);
}
equal(supplementOnsSchedule({ ...schedule, scheduleSecondWeek: [{ day: 'Ср', pairs: [{ ...pair, dates: [] }] }] }, metadata)
  .scheduleSecondWeek[0].pairs[0].location, null);
const conflicting = { ...occurrence, id: 2, location: { title: 'Zoom', uri: 'https://zoom.us/j/999' } };
equal(supplementOnsSchedule(schedule, { ...metadata, occurrences: [occurrence, conflicting] }).scheduleSecondWeek[0].pairs[0].location, null);
equal(supplementOnsSchedule(schedule, { ...metadata, occurrences: [occurrence, { ...occurrence, id: 2 }] }).scheduleSecondWeek[0].pairs[0].location.uri, url);
const twoDates = { ...schedule, scheduleSecondWeek: [{ day: 'Ср', pairs: [{ ...pair, dates: ['2026-10-07', '2026-10-14'] }] }] };
const split = supplementOnsSchedule(twoDates, metadata).scheduleSecondWeek[0].pairs;
equal(split.length, 2);
equal(split[0].dates, ['2026-10-07']);
equal(split[1].dates, ['2026-10-14']);
equal(split[1].location, null);
const multiple = { ...metadata, occurrences: [{ ...occurrence, lecturers: [teacher, { id: 'c'.repeat(64), name: 'Другий викладач' }] }] };
equal(supplementOnsSchedule(schedule, multiple).scheduleSecondWeek[0].pairs[0].lecturer, { id: '', name: 'Викладач події, Другий викладач' });
equal(supplementOnsSchedule(schedule, { ...metadata, occurrences: [{ ...occurrence, location: null }] }).scheduleSecondWeek[0].pairs[0].location, null);
const staleAnnual = copy(schedule);
staleAnnual.scheduleSecondWeek[0].pairs[0].lecturer = { id: 'd'.repeat(64), name: 'Річне призначення' };
equal(supplementOnsSchedule(staleAnnual, metadata).scheduleSecondWeek[0].pairs[0].lecturer, { id: '', name: teacher.name });
const theoretical = 'Теоретична підготовка базової загальновійськової підготовки';
equal(parseOnsOccurrences({ ...metadata, occurrences: [{ ...occurrence, name: theoretical }] }, '6078').occurrences[0].name, theoretical);

// Optional private capture from the read-only production probe, kept outside Git.
if (process.argv[2] && process.argv[3]) {
  const captures = JSON.parse(fs.readFileSync(process.argv[2], 'utf8').replace(/^\uFEFF/, ''));
  const apiDir = process.argv[3];
  let groups = 0, events = 0;
  for (const capture of captures) {
    const original = JSON.parse(fs.readFileSync(path.join(apiDir, `${capture.groupId}.json`), 'utf8').replace(/^\uFEFF/, ''));
    const valid = parseOnsOccurrences(capture, capture.groupId);
    const joined = supplementOnsSchedule(original, valid);
    const repaired = [...joined.scheduleFirstWeek, ...joined.scheduleSecondWeek].flatMap((day) => day.pairs)
      .filter((p) => p.name === ons && p.dates.includes('2026-10-07'));
    equal(repaired.length, 4);
    for (const p of repaired) {
      equal(!!p.lecturer?.name, true);
      equal(!!p.location?.uri, true);
      const matches = capture.occurrences.filter((o) => o.date === '2026-10-07' && o.time === p.time && o.name === p.name);
      equal(matches.length, 1);
      equal(p.location.uri, matches[0].location.uri);
      events++;
    }
    groups++;
  }
  console.log(`LIVE CAPTURE PASS ${groups} groups / ${events} direct meeting links`);
}
console.log(`PASS ${checks} ONS adapter checks`);
