import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { media } from '../../common/styles/styles';

export const RadioGroupWrapper = styled.div<{ $fullWidth?: boolean; $rounded?: boolean }>`
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  display: flex;
  padding: 4px;
  justify-content: space-around;
  background: ${getValueFromTheme('bgOptions')};
  box-shadow: inset 0 0 8px rgba(136, 136, 136, 0.08);
  border-radius: ${(props) => (props.$rounded ? '9999px' : '8px')};
  gap: 4px;
`;

export const RadioGroupOption = styled.div<{ $active: boolean; $rounded?: boolean; $isActualValue?: boolean }>`
  flex-grow: 1;
  transition: 0.2s ease-in background-color;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.01em;
  color: ${getValueFromTheme('secondaryFontColor')};
  border-radius: ${(props) => (props.$rounded ? '9999px' : '6px')};
  white-space: nowrap;

  &:after {
    content: attr(data-text);
    content: attr(data-text) / '';
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: 600;

    @media speech {
      display: none;
    }
  }

  ${(props) =>
    props.$active
      ? css`
          font-weight: 600;
          background-color: #fff;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
          color: #141518;
        `
      : ''};

  ${(props) =>
    props.$isActualValue &&
    css`
      text-decoration: underline;
      text-decoration-color: ${getValueFromTheme('brand600')};
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    `};

  ${media.extraSmallMode} {
    padding: 6px;
  }
`;
