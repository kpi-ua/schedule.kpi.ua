import moment from 'moment';
import {
  Container,
  Divider,
  InnerContainer,
  TimeCell,
} from "./timeDivider.style";

const TimeDivider = ({ value }: { value: string }) => (
  <Container>
    <InnerContainer>
      <TimeCell>{moment(value, 'H:mm').format('HH:mm')}</TimeCell>
      <Divider />
    </InnerContainer>
  </Container>
);

export default TimeDivider;
