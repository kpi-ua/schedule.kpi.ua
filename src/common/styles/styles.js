import styled, {css} from 'styled-components';
import {flexbox, space} from 'styled-system';
import {MODES} from "../constants/modes";
import {getModeSize} from "../utils/getModeSize";

export const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};

  // Support for gap in flexbox
  gap: ${(props) => props.gap};
`;

const LogoComponent = () => <h2>LOGO</h2>;

export const media = {
  [MODES.EXTRA_SMALL]: `@media(max-width: ${getModeSize(MODES.EXTRA_SMALL)})`,
  [MODES.SMALL]: `@media(max-width: ${getModeSize(MODES.SMALL)})`,
  [MODES.MEDIUM]: `@media(max-width: ${getModeSize(MODES.MEDIUM)})`,
  [MODES.BIG]: `@media(min-width: ${getModeSize(MODES.BIG)})`,
};

export const Logo = styled(LogoComponent)`
  max-width: 200px;
  width: 100%;
  height: auto;
`;

export const LessThenMedium = styled.div`
  ${media.bigMode} {
    display: none;
  }
`

export const ScheduleItemMixin = css`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`
