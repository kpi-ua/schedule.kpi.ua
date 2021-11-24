import ScheduleRouter from '../containers/router';
import Navbar from '../containers/navbar';
import { Wrapper } from './app.style';
import { WeekContextProvider } from '../common/context/weekContext';
import ThemeContextProvider from '../common/context/themeContext';
import { GroupContextProvider } from '../common/context/groupContext';
import { LecturerContextProvider } from '../common/context/lecturerContext';

function App() {
  return (
    <WeekContextProvider initialValue="firstWeek">
      <GroupContextProvider>
        <ThemeContextProvider initialValue={null}>
          <LecturerContextProvider>
            <Wrapper>
              <Navbar/>
              <ScheduleRouter/>
            </Wrapper>
          </LecturerContextProvider>
        </ThemeContextProvider>
      </GroupContextProvider>
    </WeekContextProvider>
  );
}

export default App;
