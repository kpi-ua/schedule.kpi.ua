'use client';

import Link from 'next/link';
import { useLocalStorage } from 'react-use';

import TeacherIcon from '@/assets/icons/teacher.svg?react';
import { routes } from '@/lib/constants/routes';
import { EntityWithNameAndId } from '@/models/EntityWithNameAndId';

import { Property } from './property';

interface Props {
  lecturer: EntityWithNameAndId;
}

export const LecturerProperty = ({ lecturer }: Props) => {
  const [, setLecturerId] = useLocalStorage<string | null>('lecturerId');

  const handleLecturerClick = () => {
    setLecturerId(lecturer.id);
  };

  return (
    <Property>
      <TeacherIcon />
      <Link
        className="text-primary-font"
        onClick={handleLecturerClick}
        href={routes.LECTURER + `?lecturerId=${lecturer.id}`}
      >
        {lecturer.name}
      </Link>
    </Property>
  );
};
