import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const GridWrapper = styled.div`
  overflow: hidden;
  background-color: ${getValueFromTheme('bgTable')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  padding: 48px 20px 7rem;
  margin: 36px 24px 64px;
`;

export const Header = styled.h1`
  /* padding:  20px; */
  text-align : center;
  font-weight: lighter;
`

export const WordAccent = styled.p`
  font-weight: bold;
`