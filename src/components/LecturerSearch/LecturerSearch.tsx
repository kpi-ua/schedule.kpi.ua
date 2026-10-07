'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAction } from 'next-safe-action/hooks';
import { Button } from '../ui/button';
import Link from '../../assets/icons/link.svg?react';
import SearchSelect from '../SearchSelect';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { getScheduleByLecturerAction } from '../../actions/lecturer.actions';

interface Props {
  lecturers: EntityWithNameAndId[];
}

const LecturerSearch = ({ lecturers }: Props) => {
  const searchParams = useSearchParams();
  const lecturerId = searchParams.get('lecturerId');
  const lecturer = lecturers.find(({ id }) => String(id) === lecturerId);

  const { handleChange } = useEntitySearch('lecturerId');

  const { execute, input, result, isExecuting } = useAction(getScheduleByLecturerAction);

  useEffect(() => {
    if (lecturerId) {
      execute({ lecturerId });
    }
  }, [lecturerId, execute]);

  // Ignore a still-in-flight result for a lecturer the user has already navigated away from.
  const lecturerProfile = input?.lecturerId === lecturerId ? result.data?.profile?.profile : undefined;
  const isLoading = isExecuting;

  const handleGoToLecturerProfile = () => {
    if (!lecturerProfile) {
      return;
    }

    window.open(lecturerProfile, '_blank');
  };

  return (
    <div className="flex gap-2 max-sm:w-full max-sm:flex-row-reverse">
      <Button
        variant="secondary"
        size="sm"
        disabled={isLoading || !lecturerProfile}
        onClick={handleGoToLecturerProfile}
      >
        <Link />
      </Button>
      <SearchSelect options={lecturers} value={lecturer} onChange={(item) => handleChange(item.id)} />
    </div>
  );
};

export default LecturerSearch;
