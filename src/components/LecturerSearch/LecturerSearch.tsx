import { Button } from '../ui/button';
import Link from '../../assets/icons/link.svg?react';
import SearchSelect from '../SearchSelect';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { useStore } from '../../store';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { usePreloadedList } from '../../common/hooks/usePreloadedList';

const LecturerSearch = () => {
  const { lecturers } = usePreloadedList();
  const lecturer = useStore((state) => state.lecturer);
  const setLecturer = useStore((state) => state.setLecturer);

  const { handleChange } = useEntitySearch('lecturerId', lecturers, setLecturer);

  const { data: lecturerLessonsResponse, isLoading } = useLecturerSchedule(lecturer?.id);

  const lecturerProfile = lecturerLessonsResponse?.profile?.profile;

  const handleGoToLecturerProfile = () => {
    if (!lecturerProfile) {
      return;
    }

    window.open(lecturerProfile, '_blank');
  };

  return (
    <div className="flex gap-2 max-xs:w-full max-xs:flex-row-reverse">
      <Button
        variant="secondary"
        size="sm"
        disabled={isLoading || !lecturerProfile}
        onClick={handleGoToLecturerProfile}
      >
        <Link />
      </Button>
      <SearchSelect options={lecturers} value={lecturer} onChange={handleChange} />
    </div>
  );
};

export default LecturerSearch;
