import { Container, Divider, InnerContainer, TimeCell } from './TimeDivider.style';

const TimeDivider = ({ value }: { value: string }) => (
  <Container>
    <InnerContainer>
      <TimeCell>{value}</TimeCell>
      <Divider />
    </InnerContainer>
  </Container>
);

export default TimeDivider;
