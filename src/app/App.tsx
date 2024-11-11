import { Route, Switch } from 'react-router-dom';

import { About } from '../containers/About';
import Schedule from '../containers/Schedule';
import { getValueFromTheme } from '../common/utils/getValueFromTheme';
import { routes } from '../common/constants/routes';
import styled, { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '../common/constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${getValueFromTheme('bgPrimary')};
  min-height: 100vh;
`;
const queryClient = new QueryClient()
function App() {
  return  (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme["light"]}>
        <Wrapper>
          <Switch>
            <Route path={routes.ABOUT}>
              <About />
            </Route>
            <Route>
              <Schedule />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
