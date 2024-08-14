import {
  Container,
  Divider,
  InnerContainer,
  TimeCell,
} from "./timeDivider.style";

import { ReactNode } from "react";

const TimeDivider = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <InnerContainer>
        <TimeCell>{children}</TimeCell>
        <Divider />
      </InnerContainer>
    </Container>
  );
};

export default TimeDivider;
