import styled, { css } from 'styled-components';

import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

interface ButtonProps {
  $type?: 'primary' | 'secondary' | 'tertiary';
  $loading?: boolean;
  $size?: 'lg' | 'md' | 'sm';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  padding: var(--padding);
  font-size: var(--font-size);
  line-height: var(--line-height);
  border-radius: 8px;

  ${props => {
    switch (props.$size) {
      case 'lg':
        return css`
          --padding: 16px;
          --font-size: 1rem;
          --line-height: 24px;
        `;
      case 'sm':
        return css`
          --padding: 10px;
          --font-size: 0.75rem;
          --line-height: 16px;
        `;
      default:
        return css`
          --padding: 12px;
          --font-size: 0.875rem;
          --line-height: 20px;
        `;
    }
  }};

  ${props => {
    switch (props.$type) {
      case 'primary':
        return css`
          border: none;
          color: ${getValueFromTheme('basicWhite')};
          background-color: ${getValueFromTheme('basicBlue')};

          path {
            fill: ${getValueFromTheme('basicWhite')};
          }

          &:disabled {
            background-color: ${getValueFromTheme('brand700')};
            opacity: 0.4;
          }

          &:hover:not(:disabled) {
            background-color: ${getValueFromTheme('brand700')};
          }

          &:active:not(:disabled) {
            background-color: ${getValueFromTheme('basicBlue')};
            border-color: ${getValueFromTheme('brand900')};
            border-width: 1px;
            border-style: solid;
            padding: calc(var(--padding) - 1px);
          }
        `;
      case 'tertiary':
        return css`
          border: none;
          color: ${getValueFromTheme('neutral600')};
          background-color: transparent;

          &:disabled {
            background-color: ${getValueFromTheme('brand700')};
            opacity: 0.4;
          }

          &:hover:not(:disabled) {
            color: ${getValueFromTheme('neutral700')};
            background-color: ${getValueFromTheme('neutral50')};
          }

          &:active:not(:disabled) {
            color: ${getValueFromTheme('neutral900')};
          }
        `;
      default:
        return css`
          color: ${getValueFromTheme('neutral900')};
          border-color: ${getValueFromTheme('neutral300')};
          border-width: 1px;
          border-style: solid;
          background: none;
          padding: calc(var(--padding) - 1px);

          &:disabled {
            border-color: ${getValueFromTheme('neutral300')};
            background-color: ${getValueFromTheme('neutral50')};
            color: ${getValueFromTheme('neutral300')};

            path {
              fill: ${getValueFromTheme('neutral300')};
            }
          }

          &:hover:not(:disabled) {
            border-color: ${getValueFromTheme('neutral900')};
            color: ${getValueFromTheme('neutral900')};
            background: none;
          }

          &:active:not(:disabled) {
            border-color: ${getValueFromTheme('basicBlue')};
            background-color: ${getValueFromTheme('brand00')};
            color: ${getValueFromTheme('basicBlue')};
          }
        `;
      }
    }
  };
`;
