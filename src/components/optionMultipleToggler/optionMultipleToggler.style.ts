import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const TogglerWrapper = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-around;
  min-height: 48px;
  background: ${getValueFromTheme('bgOptions')};
  box-shadow: inset 0 0 8px rgba(136, 136, 136, 0.08);
  border-radius: 42px;
  position: relative;
  z-index: 1;
`;

export const TogglerOption = styled.div<{active: boolean}>`
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.01em;
  color: ${getValueFromTheme('primaryFontColor')};
  border-radius: 90px;
  ${props => props.active ? css`
    font-weight: 600;
    background-color: #fff;
    border: 0.5px solid rgba(20, 21, 24, 0.12);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
    color: #141518;
  ` : ''};
`;