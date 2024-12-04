import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const ExamsListWrapper = styled.div`
  margin: 64px;
`;

export const Header = styled.h1`
  margin: 64px 0px;
  color: ${getValueFromTheme('primaryFontColor')};
  text-align: center;
  font-weight: lighter;
`;

export const WordAccent = styled.span`
  font-weight: bold;
`;
