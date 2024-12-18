import { Route, Routes } from 'react-router-dom';

import { getValueFromTheme } from '../common/utils/getValueFromTheme';
import { routes } from '../common/constants/routes';
import styled, { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '../common/constants/theme';
import { Contacts } from '../containers/About/Contacts';
import { AboutLayout } from '../layouts/AboutLayout';
import { Project } from '../containers/About/Project';
import LecturerSchedule from '../containers/LecturerSchedule';
import { ScheduleLayout } from '../layouts/ScheduleLayout';
import ScheduleExams from '../containers/scheduleExams';
import LastSyncDate from '../components/LastSyncDate';
import GroupSchedule from '../containers/GroupSchedule';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${getValueFromTheme('bgPrimary')};
  min-height: 100vh;
`;
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme['light']}>
        <Wrapper>
          <Routes>
            <Route
              index
              path={routes.GROUP}
              element={
                <ScheduleLayout>
                  <GroupSchedule />
                  <LastSyncDate />
                </ScheduleLayout>
              }
            />
            <Route
              path={routes.ABOUT}
              element={
                <AboutLayout>
                  <Project />
                </AboutLayout>
              }
            />
            <Route
              path={routes.CONTACTS}
              element={
                <AboutLayout>
                  <Contacts />
                </AboutLayout>
              }
            />
            <Route
              path={routes.SESSION}
              element={
                <ScheduleLayout>
                  <ScheduleExams />
                  <LastSyncDate />
                </ScheduleLayout>
              }
            />
            <Route
              path={routes.LECTURER}
              element={
                <ScheduleLayout>
                  <LecturerSchedule />
                </ScheduleLayout>
              }
            />
            <Route
              path="*"
              element={
                <ScheduleLayout>
                  <GroupSchedule />
                  <LastSyncDate />
                </ScheduleLayout>
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
