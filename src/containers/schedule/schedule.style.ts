import styled from 'styled-components';
import { media } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const GridContainer = styled.div`
  padding-left: 100px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 10px;

  ${media.mediumMode} {
    grid-template-columns: repeat(3, 1fr);
  }
;

  ${media.smallMode} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.extraSmallMode} {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 23px;
  }
`;

export const CurrentDayContainer = styled.div<{start: number}>`
  transform: scale(1.1, 1.2);
  position: absolute;
  background: ${getValueFromTheme('currentDayContainer')};
  grid-column: ${(props: any) => props.start} / span 1;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 0;
`;
