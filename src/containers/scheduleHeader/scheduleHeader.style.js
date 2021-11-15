import styled from 'styled-components';
import { media } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const WeekDay = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${getValueFromTheme('primaryFontColor')};
  z-index: 2;

  ${media.extraSmallMode} {
    display: none;
  }
`;