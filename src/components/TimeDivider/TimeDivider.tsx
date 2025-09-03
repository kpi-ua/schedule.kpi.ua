import { parseTime } from '../../common/utils/parseTime';
import { Container, Divider, InnerContainer, TimeCell } from './TimeDivider.style';

const TimeDivider = ({ value }: { value: string }) => {
  const parsedTime = parseTime(value);

  return (
    <Container>
      <InnerContainer>
        <TimeCell>{parsedTime?.format('HH:mm')}</TimeCell>
        <Divider />
      </InnerContainer>
    </Container>
  );
};

export default TimeDivider;
