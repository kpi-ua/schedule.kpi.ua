import { Route, Switch } from 'react-router-dom';

import { About } from '../containers/About';
import Schedule from '../containers/Schedule';
import ThemeContextProvider from "../common/context/themeContext";
import { getValueFromTheme } from '../common/utils/getValueFromTheme';
import { routes } from '../common/constants/routes';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

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
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
