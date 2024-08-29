import styled, { css } from 'styled-components';
import { flexbox, space } from 'styled-system';
import { SCREEN_SIZES } from '../constants/screenSize';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { Link } from 'react-router-dom';
import { ScreenSize } from '../../types/ScreenSize';

export const Flex = styled.div<{gap?: string}>`
  display: flex;
  ${space};
  ${flexbox};

  // Support for gap in flexbox
  gap: ${(props) => props.gap};
`;

export const Pictogram = styled.img`
  filter: ${getValueFromTheme('svgPrimaryFilter')};
`;

export const media = {
  [ScreenSize.ExtraSmall]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.ExtraSmall]})`,
  [ScreenSize.Small]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Small]})`,
  [ScreenSize.Medium]: `@media(max-width: ${SCREEN_SIZES[ScreenSize.Medium]})`,
  [ScreenSize.Big]: `@media(min-width: ${SCREEN_SIZES[ScreenSize.Big]})`,
};

export const Logo = styled(Pictogram)`
  max-width: 92px;
  max-height: 92px;
  width: 100%;
`;

export const ScheduleItemMixin = css`
  background: ${getValueFromTheme('bgCard')};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: ${getValueFromTheme('primaryFontColor')};
`