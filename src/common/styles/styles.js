import styled, { css } from 'styled-components';
import { flexbox, space } from 'styled-system';
import { MODES } from 'common/constants/modes';
import { getModeSize } from 'common/utils/getModeSize';
import { getValueFromTheme } from 'common/utils/getValueFromTheme';
import { Link } from 'react-router-dom';

export const Flex = styled.div`
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
  [MODES.EXTRA_SMALL]: `@media(max-width: ${getModeSize(MODES.EXTRA_SMALL)})`,
  [MODES.SMALL]: `@media(max-width: ${getModeSize(MODES.SMALL)})`,
  [MODES.MEDIUM]: `@media(max-width: ${getModeSize(MODES.MEDIUM)})`,
  [MODES.BIG]: `@media(min-width: ${getModeSize(MODES.BIG)})`,
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
`;
