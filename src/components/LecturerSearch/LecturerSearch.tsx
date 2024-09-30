import Button from '../Button';
import { ReactComponent as Link } from '../../assets/icons/link.svg';
import SearchSelect from '../SearchSelect';
import { media } from '../../common/styles/styles';
import styled from 'styled-components';
import { useEntitySearch } from '../../common/hooks/useEntitySearch';
import { useLecturerContext } from '../../common/context/lecturerContext';
import { useLecturerSchedule } from '../../queries/useLecturerSchedule';
import { usePreloadedListContext } from "../../common/context/preloadedListsContext";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  ${media.extraSmallMode} {
    flex-direction: row-reverse;
    width: 100%;
  }
`;

const LecturerSearch = () => {
  const { lecturers } = usePreloadedListContext();
  const lecturerContext = useLecturerContext();
  const { handleChange } = useEntitySearch('lecturerId', lecturers, lecturerContext);
  const { data: lecturerLessonsResponse, isLoading } = useLecturerSchedule(lecturerContext.item?.id);

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
      <SearchSelect
        options={lecturers}
        value={lecturerContext.item}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default LecturerSearch;
