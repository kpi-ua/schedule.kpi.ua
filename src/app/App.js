import ScheduleRouter from '../containers/router';
import Navbar from '../containers/navbar';
import { Wrapper } from './app.style';
import { WeekContextProvider } from '../common/context/weekContext';
import ThemeContextProvider from '../common/context/themeContext';
import { LecturerContextProvider } from '../common/context/lecturerContext';

function App() {
  return (
    <WeekContextProvider initialValue="firstWeek">
      <ThemeContextProvider>
        <LecturerContextProvider>
          <Wrapper>
            <Navbar/>
            <ScheduleRouter/>
          </Wrapper>
        </LecturerContextProvider>
      </ThemeContextProvider>
    </WeekContextProvider>
  );
}

export default App;
