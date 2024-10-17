import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from '../components/Footer';
import { GroupContextProvider } from '../common/context/groupContext';
import { LecturerContextProvider } from '../common/context/lecturerContext';
import Navbar from '../containers/navbar';
import { PreloadedListsContextProvider } from '../common/context/preloadedListsContext';
import ScrollToTop from '../components/ScrollToTop';
import { WeekContextProvider } from '../common/context/weekContext';
import { media } from '../common/styles/styles';
import styled from 'styled-components';

interface ScheduleLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  margin: 36px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${media.extraSmallMode} {
    margin: 16px;
  }
`;

const queryClient = new QueryClient()

export const ScheduleLayout = ({ children }: ScheduleLayoutProps) => (
  <QueryClientProvider client={queryClient}>
    <WeekContextProvider>
      <PreloadedListsContextProvider>
        <GroupContextProvider>
          <LecturerContextProvider>
            <ScrollToTop>
              <Navbar />
              <Container>
                {children}
              </Container>
              <Footer />
            </ScrollToTop>
          </LecturerContextProvider>
        </GroupContextProvider>
      </PreloadedListsContextProvider>
    </WeekContextProvider>
  </QueryClientProvider>
);
