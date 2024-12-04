import Button from '../Button';
import { ReactComponent as Link } from '../../assets/icons/link.svg';
import SearchSelect from '../SearchSelect';
import { media } from '../../common/styles/styles';
import styled from 'styled-components';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { useStore } from '../../store';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { usePreloadedList } from '../../common/hooks/usePreloadedList';

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  ${media.extraSmallMode} {
    flex-direction: row-reverse;
    width: 100%;
  }
`;

const LecturerSearch = () => {
  const { lecturers } = usePreloadedList();
  const lecturer = useStore((state) => state.lecturer);
  const setLecturer = useStore((state) => state.setLecturer);

  const { handleChange } = useEntitySearch('lecturerId', lecturers, setLecturer);

  const { data: lecturerLessonsResponse, isLoading } = useLecturerSchedule(lecturer?.id);

  const lecturerProfile = lecturerLessonsResponse?.data?.profile?.profile;

  const handleGoToLecturerProfile = () => {
    if (!lecturerProfile) {
      return;
    }

    window.open(lecturerProfile, '_blank');
  };

  return (
    <Wrapper>
      <Button $type="secondary" $size="sm" disabled={isLoading || !lecturerProfile} onClick={handleGoToLecturerProfile}>
        <Link />
      </Button>
      <SearchSelect options={lecturers} value={lecturer} onChange={handleChange} />
    </Wrapper>
  );
};

export default LecturerSearch;
