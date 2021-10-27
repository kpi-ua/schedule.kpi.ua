import styled from 'styled-components';
import {Grid} from "@material-ui/core";
import {media} from "../../common/styles/styles";

export const GridWrapper = styled.div`
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  padding: 48px 20px 7rem;
  margin: 36px 24px 64px;
`;

export const GridContainer = styled.div`
  padding-left: 100px;
  display: grid;
  position: relative;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 10px;
  ${media.mediumMode} {
    grid-template-columns: repeat(3, 1fr);
  };
  ${media.smallMode} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.extraSmallMode} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CurrentDayContainer = styled.div`
  transform: scale(1.1, 1.05);
  position: absolute;
  background: linear-gradient(180deg, rgba(223, 233, 253, 0) 0%, rgba(223, 233, 253, 0.5) 10.73%, #DFE9FD 55%, rgba(223, 233, 253, 0.5) 89.9%, rgba(223, 233, 253, 0) 100%);
  grid-column: 1 / 2;
  width: 100%;
  top: 0;
  bottom: 0;
`
