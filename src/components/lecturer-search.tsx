'use client';

import { useSearchParams } from 'next/navigation';

import Link from '@/assets/icons/link.svg?react';
import { useEntitySearch } from '@/lib/hooks/use-entity-search';
import { useLecturerProfileQuery } from '@/lib/queries/lecturer-profile.query';
import { EntityWithNameAndId } from '@/models/EntityWithNameAndId';

import { SearchSelect } from './search-select';
import { Button } from './ui/button';

interface Props {
  lecturers: EntityWithNameAndId[];
}

export const LecturerSearch = ({ lecturers }: Props) => {
  const searchParams = useSearchParams();
  const lecturerId = searchParams.get('lecturerId');
  const lecturer = lecturers.find(({ id }) => String(id) === lecturerId);

  const { handleChange } = useEntitySearch('lecturerId');

  const { data: lecturerProfile, isLoading } = useLecturerProfileQuery(lecturerId);

  const handleGoToLecturerProfile = () => {
    if (!lecturerProfile?.data?.profile?.profile) {
      return;
    }

    window.open(lecturerProfile?.data?.profile?.profile, '_blank');
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
