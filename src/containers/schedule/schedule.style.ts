import styled from "styled-components";
import { media } from "../../common/styles/styles";
import { getValueFromTheme } from "../../common/utils/getValueFromTheme";

export const GridContainer = styled.div`
  margin: 0.75rem;
  padding-left: 100px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 10px;

  ${media.mediumMode} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.smallMode} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.extraSmallMode} {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 60px;
  }
`;

export const CurrentDayContainer = styled.div<{ start: number }>`
  position: absolute;
  background: ${getValueFromTheme("currentDayContainer")};
  grid-column: ${(props) => props.start} / span 1;
  width: calc(100% + 1.5rem);
  left: -0.75rem;
  top: -0.75rem;
  bottom: -0.75rem;
  z-index: 0;

  ${media.extraSmallMode} {
    top: 0px;
  }
`;
