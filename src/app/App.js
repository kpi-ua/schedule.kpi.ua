import { Wrapper } from './app.style';
import ScheduleRouter from 'containers/router';
import Navbar from 'containers/navbar';
import ScrollToTop from 'containers/scrollToTop';
import ContextWrapper from 'containers/contextWrapper';

function App() {
  return (
    <ContextWrapper>
      <ScrollToTop>
        <Wrapper>
          <Navbar/>
          <ScheduleRouter/>
        </Wrapper>
      </ScrollToTop>
    </ContextWrapper>

  );
}

export default App;
