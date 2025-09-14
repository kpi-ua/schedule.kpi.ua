import styled from 'styled-components';
import { Flex } from '../../common/styles/styles';

export const TabContainer = styled(Flex)<{ $justifyContent: string; $alignItems: string }>`
  white-space: nowrap;
  max-width: calc(100vw - 3rem);
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  overflow-x: scroll;
`;
