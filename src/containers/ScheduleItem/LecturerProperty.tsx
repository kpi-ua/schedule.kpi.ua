import { Property } from './Property.styled';
import TeacherIcon from '../../assets/icons/teacher.svg?react';
import { StyledLink } from '../../common/styles/styles';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { useStore } from '../../store';
import { routes } from '../../common/constants/routes';

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
      <StyledLink onClick={handleLecturerClick} to={routes.LECTURER + `?lecturerId=${lecturer.id}`}>
        {lecturer.name}
      </StyledLink>
    </Property>
  );
};

export default LecturerProperty;
