import { flexbox, space } from 'styled-system';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { SCREEN_SIZES } from '../constants/screenSize';
import { ScreenSize } from '../../types/ScreenSize';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const Flex = styled.div<{ $gap?: string }>`
  display: flex;
  ${space};
  ${flexbox};

  // Support for gap in flexbox
  gap: ${(props) => props.$gap};
`;

export const Pictogram = styled.img`
  filter: ${getValueFromTheme('svgPrimaryFilter')};
  fill: ${getValueFromTheme('primaryFontColor')};
`;

export const media = {
  [ScreenSize.ExtraSmall]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.ExtraSmall]})`,
  [ScreenSize.Small]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Small]})`,
  [ScreenSize.Medium]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Medium]})`,
  [ScreenSize.Big]: `@media(min-width: ${SCREEN_SIZES[ScreenSize.Big]})`,
};

export const mediaReverse = {
  [ScreenSize.ExtraSmall]: `@media(min-width: ${SCREEN_SIZES[ScreenSize.ExtraSmall]})`,
  [ScreenSize.Small]: `@media(min-width: ${SCREEN_SIZES[ScreenSize.Small]})`,
  [ScreenSize.Medium]: `@media(min-width: ${SCREEN_SIZES[ScreenSize.Medium]})`,
  [ScreenSize.Big]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Big]})`,
};

export const Logo = styled(Pictogram)`
  max-width: 185px;
  max-height: 64px;
  width: 100%;

  ${media.mediumMode} {
    max-width: 116px;
    max-height: 40px;
  }
`;

export const ScheduleItemMixin = css`
  background: ${getValueFromTheme('bgCard')};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  border: 1px solid ${getValueFromTheme('neutral200')};
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: ${getValueFromTheme('secondaryFontColor')};
`;

export const StyledLink = styled(Link)`
  color: ${getValueFromTheme('primaryFontColor')};
`;
