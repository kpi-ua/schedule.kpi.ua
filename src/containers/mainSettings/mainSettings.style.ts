import styled from "styled-components";
import { Flex, media } from "../../common/styles/styles";

export const MainSettingsContainer = styled(Flex)<{
  flexDirection: string;
  alignItems: string;
}>`
  ${media.smallMode} {
    width: 100%;
  }
`;
