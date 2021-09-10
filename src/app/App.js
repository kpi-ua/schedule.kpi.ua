import ScheduleRouter from '../containers/router';
import Navbar from '../containers/navbar';
import { Wrapper } from './app.style';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <ScheduleRouter />
    </Wrapper>
  );
}

export default App;
