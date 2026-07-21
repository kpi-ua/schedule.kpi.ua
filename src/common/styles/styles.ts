import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { SCREEN_SIZES } from '../constants/screenSize';
import { ScreenSize } from '../../types/ScreenSize';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import LogoIcon from '../../assets/logo.svg?react';

export const media = {
  [ScreenSize.ExtraSmall]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.ExtraSmall]})`,
  [ScreenSize.Small]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Small]})`,
  [ScreenSize.Medium]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Medium]})`,
  [ScreenSize.Big]: `@media(min-width: ${SCREEN_SIZES[ScreenSize.Big]})`,
};

export const Logo = styled(LogoIcon)`
  max-width: 185px;
  max-height: 64px;
  width: 100%;

  ${media.mediumMode} {
    max-width: 116px;
    max-height: 40px;
  }
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: ${getValueFromTheme('secondaryFontColor')};
`;

export const StyledLink = styled(Link)`
  color: ${getValueFromTheme('primaryFontColor')};
`;
