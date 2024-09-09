import styled from "styled-components";
import { Flex, media } from "../../common/styles/styles";

export const MainSettingsContainer = styled(Flex)<{
  flexDirection: string;
  alignItems: string;
}>`
  flex-grow: 1;
  ${media.smallMode} {
    width: 100%;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;

  ${media.smallMode} {
    flex-direction: column;
    align-items: center;
  }

  ${media.extraSmallMode} {
    width: 100%;
  }
`;
