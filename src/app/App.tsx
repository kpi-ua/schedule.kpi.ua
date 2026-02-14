/// <reference types="vite-plugin-svgr/client" />

import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

import { getValueFromTheme } from '../common/utils/getValueFromTheme';
import { routes } from '../common/constants/routes';
import { GA_TRACKING_ID } from '../common/constants/config';
import styled, { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '../common/constants/theme';
import { Contacts } from '../containers/About/Contacts';
import { AboutLayout } from '../layouts/AboutLayout';
import { Project } from '../containers/About/Project';
import LecturerSchedule from '../containers/LecturerSchedule';
import { ScheduleLayout } from '../layouts/ScheduleLayout';
import ScheduleExams from '../containers/ScheduleExams';
import GroupSchedule from '../containers/GroupSchedule';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${getValueFromTheme('bgPrimary')};
  min-height: 100vh;
`;

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const isGAInitialized = useRef(false);

  // Initialize Google Analytics once
  useEffect(() => {
    if (GA_TRACKING_ID && !isGAInitialized.current) {
      ReactGA.initialize(GA_TRACKING_ID);
      isGAInitialized.current = true;
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (isGAInitialized.current) {
      try {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
      } catch (error) {
        console.error('Failed to send pageview to Google Analytics:', error);
      }
    }
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme['light']}>
        <Wrapper>
          <Routes>
            <Route path="/*" element={<ScheduleLayout />}>
              <Route index element={<GroupSchedule />} />
              <Route path={routes.SESSION} element={<ScheduleExams />} />
              <Route path={routes.LECTURER} element={<LecturerSchedule />} />
            </Route>
            <Route element={<AboutLayout />}>
              <Route path={routes.ABOUT} element={<Project />} />
              <Route path={routes.CONTACTS} element={<Contacts />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
