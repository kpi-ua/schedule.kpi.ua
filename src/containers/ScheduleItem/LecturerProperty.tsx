'use client';

import { Property } from './Property';
import TeacherIcon from '../../assets/icons/teacher.svg?react';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { routes } from '../../common/constants/routes';
import Link from 'next/link';
import { useLocalStorage } from 'react-use';

interface Props {
  lecturer: EntityWithNameAndId;
}

const LecturerProperty = ({ lecturer }: Props) => {
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

export default LecturerProperty;
