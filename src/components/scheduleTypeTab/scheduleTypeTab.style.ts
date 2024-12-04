import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const Tab = styled.div<{ active: boolean }>`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: ${getValueFromTheme('secondaryFontColor')};
  cursor: pointer;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  &:after {
    content: '';
    top: -12px;
    border-radius: 6px;
    height: 2px;
    background-color: ${getValueFromTheme('secondaryFontColor')};
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;
