import { getValueFromTheme } from '../../../common/utils/getValueFromTheme';
import styled from 'styled-components';

export const MenuLink = styled.a`
  font-weight: 500;
  color: ${getValueFromTheme('basicBlack')};
  font-size: 16px;
  text-decoration: none;

  &.selected {
    pointer-events: none;
    cursor: default;
  }
`;
