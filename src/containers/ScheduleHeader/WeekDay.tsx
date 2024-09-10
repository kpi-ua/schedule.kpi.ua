import styled from 'styled-components';
import { media } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const WeekDay = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  padding: 24px 0px;
  color: ${getValueFromTheme('primaryFontColor')};
  z-index: 2;

  ${media.extraSmallMode} {
    display: none;
  }
`;