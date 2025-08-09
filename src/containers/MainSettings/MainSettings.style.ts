import { Flex, media } from '../../common/styles/styles';

import styled from 'styled-components';

export const MainSettingsContainer = styled(Flex)<{
  $flexDirection: string;
  $alignItems: string;
  $gap: string;
}>`
  flex-grow: 1;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};

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
