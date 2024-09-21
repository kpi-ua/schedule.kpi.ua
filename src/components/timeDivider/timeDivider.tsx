import {
  Container,
  Divider,
  InnerContainer,
  TimeCell,
} from "./timeDivider.style";

const TimeDivider = ({ value }: { value: string }) => (
  <Container>
    <InnerContainer>
      <TimeCell>{value}</TimeCell>
      <Divider />
    </InnerContainer>
  </Container>
);

export default TimeDivider;
