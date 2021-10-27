import styled from "styled-components";
import {Flex} from "../../common/styles/styles";

export const Container = styled.div`
  position: relative;
  align-self: start;
  grid-column: 1 / -1;
`

export const InnerContainer = styled(Flex)`
  left: -90px;
  right: 0;
  top: -17px;
  position: absolute;
`

export const TimeCell = styled.div`
  width: 64px;
  height: 36px;
  background: #141518;
  border-radius: 42px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Divider = styled.div`
  border-top: 1px dashed #141518;
  width: 100%;
`