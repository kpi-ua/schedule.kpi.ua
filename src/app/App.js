import ScheduleRouter from "../containers/router";
import Navbar from "../containers/navbar";
import { Wrapper } from "./app.style";
import { WeekContextProvider } from "../common/context/weekContext";
import ThemeContextProvider from "../common/context/themeContext";
import { GroupContextProvider } from "../common/context/groupContext";

function App() {
  return (
    <WeekContextProvider initialValue="firstWeek">
      <GroupContextProvider>
        <ThemeContextProvider initialValue={null}>
          <Wrapper>
            <Navbar />
            <ScheduleRouter />
          </Wrapper>
        </ThemeContextProvider>
      </GroupContextProvider>
    </WeekContextProvider>
  );
}

export default App;
