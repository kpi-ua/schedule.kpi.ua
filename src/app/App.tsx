import { GroupContextProvider } from "../common/context/groupContext";
import { LecturerContextProvider } from "../common/context/lecturerContext";
import { PreloadedListsContextProvider } from "../common/context/preloadedListsContext";
import { WeekContextProvider } from "../common/context/weekContext";
import { useCurrentDateParams } from "../common/hooks/useCurrentDateParams";
import ThemeContextProvider from "../common/context/themeContext";
import Navbar from "../containers/navbar";
import ScheduleRouter from "../containers/router";
import ScrollToTop from "../containers/scrollToTop/index";
import { Wrapper } from "./app.style";

function App() {
  const { currentWeek } = useCurrentDateParams();
  return (
    <WeekContextProvider
      initialValue={currentWeek === 1 ? "firstWeek" : "secondWeek"}
    >
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
