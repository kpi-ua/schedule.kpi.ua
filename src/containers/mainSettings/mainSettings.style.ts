import styled from "styled-components";
import { Flex, media } from "../../common/styles/styles";

export const MainSettingsContainer = styled(Flex)<{
  flexDirection: any;
  alignItems: any;
}>`
  ${media.smallMode} {
    width: 100%;
  }
`;
