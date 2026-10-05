'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import Link from '../../assets/icons/link.svg?react';
import SearchSelect from '../SearchSelect';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { LecturerSchedule } from '../../models/LecturerSchedule';

interface Props {
  lecturers: EntityWithNameAndId[];
}

const LecturerSearch = ({ lecturers }: Props) => {
  const searchParams = useSearchParams();
  const lecturerId = searchParams.get('lecturerId');
  const lecturer = lecturers.find(({ id }) => String(id) === lecturerId);

  const { handleChange } = useEntitySearch('lecturerId');

  const [lecturerProfile, setLecturerProfile] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!lecturerId) {
      setLecturerProfile(undefined);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    fetch(`/api/schedule/lecturer?lecturerId=${lecturerId}`)
      .then((response) => response.json())
      .then((schedule: LecturerSchedule) => {
        if (!cancelled) {
          setLecturerProfile(schedule.profile?.profile);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [lecturerId]);

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
