import { media } from '../common/styles/styles';
import styled from 'styled-components';

export const TwoColumnsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  margin-top: 36px;
  margin-bottom: 36px;
  font-size: 1rem;

  ${media.smallMode} {
    gap: 2rem;
  }

  ${media.extraSmallMode} {
    margin-top: 16px;
    margin-bottom: 16px;
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;