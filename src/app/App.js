import ScheduleRouter from '../containers/router';
import Navbar from '../containers/navbar';
import { Wrapper } from './app.style';
import { WeekContextProvider } from '../common/context/weekContext';
import ThemeContextProvider from '../common/context/themeContext';

function App() {
  return (
    <WeekContextProvider initialValue="firstWeek">
      <ThemeContextProvider>
        <Wrapper>
          <Navbar/>
          <ScheduleRouter/>
        </Wrapper>
      </ThemeContextProvider>
    </WeekContextProvider>
  );
}

export default App;
