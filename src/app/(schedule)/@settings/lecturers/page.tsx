import { getAllLecturersAction } from '@/actions/lecturer.actions';
import { LecturerSearch } from '@/components/lecturer-search';
import { WeekSwitch } from '@/components/week-switch';
import { unwrapAction } from '@/lib/unwrapAction';

export default async function LecturerScheduleSettings() {
  const lecturers = await unwrapAction(getAllLecturersAction());

  return (
    <>
      <LecturerSearch lecturers={lecturers} />
      <WeekSwitch />
    </>
  );
}
