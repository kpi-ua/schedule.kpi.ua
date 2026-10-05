'use client';

import { Property } from './Property';
import TeacherIcon from '../../assets/icons/teacher.svg?react';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { routes } from '../../common/constants/routes';
import Link from 'next/link';

interface Props {
  lecturer: EntityWithNameAndId;
}

const LecturerProperty = ({ lecturer }: Props) => {
  const handleLecturerClick = () => {
    setLocalStorageItem('lecturerId', lecturer.id);
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
