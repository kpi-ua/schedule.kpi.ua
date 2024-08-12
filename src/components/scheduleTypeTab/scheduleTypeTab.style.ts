import styled from "styled-components";
import { getValueFromTheme } from "../../common/utils/getValueFromTheme";

export const Tab = styled.div<{ active: boolean }>`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: ${getValueFromTheme("primaryFontColor")};
  cursor: pointer;

  &:after {
    content: "";
    top: -12px;
    border-radius: 6px;
    height: 2px;
    background-color: ${getValueFromTheme("primaryFontColor")};
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;
