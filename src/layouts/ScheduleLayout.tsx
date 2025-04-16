import Footer from '../components/Footer';
import Navbar from '../containers/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { media } from '../common/styles/styles';
import styled from 'styled-components';
import { isNil } from 'lodash-es';
import { useEffect } from 'react';
import { useCurrentTime } from '../queries/useCurrentTime';
import { useWeekStore } from '../store/weekStore';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  margin: 36px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${media.extraSmallMode} {
    margin: 16px;
  }
`;

export const ScheduleLayout = () => {
  const { data } = useCurrentTime();
  const setCurrentWeek = useWeekStore((state) => state.setCurrentWeek);

  useEffect(() => {
    if (!isNil(data?.currentWeek)) {
      const week = data?.currentWeek === 1 ? 'firstWeek' : 'secondWeek';
      setCurrentWeek(week);
    }
  }, [data?.currentWeek, setCurrentWeek]);
  return (
    <ScrollToTop>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </ScrollToTop>
  );
};
