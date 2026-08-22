import { Property } from './Property';
import TeacherIcon from '../../assets/icons/teacher.svg?react';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { useStore } from '../../store';
import { routes } from '../../common/constants/routes';
import { Link } from 'react-router-dom';

interface Props {
  lecturer: EntityWithNameAndId;
}

const LecturerProperty = ({ lecturer }: Props) => {
  const setLecturer = useStore((store) => store.setLecturer);

  const handleLecturerClick = () => {
    setLocalStorageItem('lecturerId', lecturer.id);
    setLecturer(lecturer);
  };

  return (
    <Property>
      <TeacherIcon />
      <Link
        className="text-primary-font"
        onClick={handleLecturerClick}
        to={routes.LECTURER + `?lecturerId=${lecturer.id}`}
      >
        {lecturer.name}
      </Link>
    </Property>
  );
};

export default LecturerProperty;
