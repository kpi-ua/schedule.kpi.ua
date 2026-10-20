import LecturerSearch from '../../../../components/LecturerSearch';
import WeekSwitch from '../../../../components/WeekSwitch';
import { unwrapAction } from '../../../../lib/unwrapAction';
import { getAllLecturersAction } from '../../../../actions/lecturer.actions';

export default async function LecturerScheduleSettings() {
  const lecturers = await unwrapAction(getAllLecturersAction());

  return (
    <>
      <LecturerSearch lecturers={lecturers} />
      <WeekSwitch />
    </>
  );
}
