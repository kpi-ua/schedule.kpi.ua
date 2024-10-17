import { QueryClient, QueryClientProvider } from 'react-query';

import { Footer } from '../components/Footer/Footer';
import { GroupContextProvider } from "../common/context/groupContext";
import { LecturerContextProvider } from "../common/context/lecturerContext";
import Navbar from "../containers/navbar";
import { PreloadedListsContextProvider } from "../common/context/preloadedListsContext";
import ScheduleRouter from "../containers/router";
import ScrollToTop from "../containers/scrollToTop/index";
import ThemeContextProvider from "../common/context/themeContext";
import { WeekContextProvider } from "../common/context/weekContext";
import { Wrapper } from "./app.style";

const queryClient = new QueryClient()

function App() {
  return  (
    <QueryClientProvider client={queryClient}>
      <WeekContextProvider>
        <PreloadedListsContextProvider>
          <GroupContextProvider>
            <ThemeContextProvider>
              <LecturerContextProvider>
                <ScrollToTop>
                  <Wrapper>
                    <Navbar />
                    <ScheduleRouter />
                    <Footer />
                  </Wrapper>
                </ScrollToTop>
              </LecturerContextProvider>
            </ThemeContextProvider>
          </GroupContextProvider>
        </PreloadedListsContextProvider>
      </WeekContextProvider>
    </QueryClientProvider>
  );
}

export default App;
