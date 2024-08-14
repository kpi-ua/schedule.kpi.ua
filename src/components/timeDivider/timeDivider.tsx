import {
  Container,
  Divider,
  InnerContainer,
  TimeCell,
} from "./timeDivider.style";

import { ReactNode } from "react";

const TimeDivider = ({ children }: { children: ReactNode }) => (
  <Container>
    <InnerContainer>
      <TimeCell>{children}</TimeCell>
      <Divider />
    </InnerContainer>
  </Container>
);

export default TimeDivider;
