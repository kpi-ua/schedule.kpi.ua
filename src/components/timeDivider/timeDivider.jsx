import { Container, Divider, InnerContainer, TimeCell } from './timeDivider.style';

const TimeDivider = ({children}) => {
  return (
    <Container>
      <InnerContainer alignItems="center">
        <TimeCell>{children}</TimeCell>
        <Divider/>
      </InnerContainer>
    </Container>
  );
};

export default TimeDivider;