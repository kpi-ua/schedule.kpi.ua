import ScheduleRouter from '../containers/router';
import Navbar from '../containers/navbar';
import { Wrapper } from './app.style';
import { WeekContextProvider } from '../common/context/weekContext';
import ThemeContextProvider from '../common/context/themeContext';
import { GroupContextProvider } from '../common/context/groupContext';
import { LecturerContextProvider } from '../common/context/lecturerContext';
import { PreloadedListsContextProvider } from '../common/context/preloadedListsContext';
import ScrollToTop from '../containers/scrollToTop/index';

function App() {
  return (
    <WeekContextProvider>
      <PreloadedListsContextProvider>
        <GroupContextProvider>
          <ThemeContextProvider initialValue={null}>
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
