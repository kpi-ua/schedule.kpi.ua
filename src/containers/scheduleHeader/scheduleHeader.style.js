import styled from "styled-components";
import {media} from "../../common/styles/styles";

export const WeekDay = styled.div`
  font-weight: 600;
  font-size: 16px;
  ${media.mediumMode} {
    display: none;
  }
`