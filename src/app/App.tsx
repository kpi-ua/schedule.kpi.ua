import ScheduleRouter from '../containers/router';
import Navbar from '../containers/navbar';
import { Wrapper } from './app.style';
import { WeekContextProvider } from '../common/context/weekContext';
import ThemeContextProvider from '../common/context/themeContext';
import { GroupContextProvider } from '../common/context/groupContext';
import { LecturerContextProvider } from '../common/context/lecturerContext';
import { PreloadedListsContextProvider } from '../common/context/preloadedListsContext';
import { useCurrentDateParams } from '../common/utils/useCurrentDateParams';
import ScrollToTop from '../containers/scrollToTop/index';

function App() {
  const { currentWeek } = useCurrentDateParams()
  return (
    <WeekContextProvider initialValue={currentWeek === 1 ? 'firstWeek' : 'secondWeek'}>
      <PreloadedListsContextProvider>
        <GroupContextProvider>
          <ThemeContextProvider>
            <LecturerContextProvider>
              <ScrollToTop>
                <Wrapper>
                  <Navbar />
                  <ScheduleRouter />
                </Wrapper>
              </ScrollToTop>
            </LecturerContextProvider>
          </ThemeContextProvider>
        </GroupContextProvider>
      </PreloadedListsContextProvider>
    </WeekContextProvider>
  );
}

export default App;
