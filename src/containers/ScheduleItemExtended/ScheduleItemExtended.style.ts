import styled, { css } from 'styled-components';
import { ScheduleItemMixin } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import CaretDown from '../../assets/icons/caret-down.svg?react';

export const ScheduleItemExtendedWrapper = styled.div<{
  $items: number;
}>`
  grid-row-start: span ${(props) => props.$items};
  z-index: 9;
`;

const cutOffPart = css`
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 0;
`;

export const ScheduleItemExtendedUnit = styled.div`
  ${ScheduleItemMixin};
  padding: 20px;
  position: relative;

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:not(:last-child) {
    border-bottom: none;
  }

  &:not(:first-child) {
    border-top: 1px dashed ${getValueFromTheme('neutral200')};

    &:before {
      ${cutOffPart};
      left: 0;
      transform: translate(-50%, -50%);
    }

    &:after {
      ${cutOffPart};
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;

export const CollapseItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${getValueFromTheme('neutral200')};
  color: ${getValueFromTheme('basicBlack')};
  font-weight: 600;
  border-radius: 0 0 15px 15px;
  text-align: center;
  padding: 15px;
  cursor: pointer;
`;

export const Caret = styled(CaretDown)<{ open: boolean }>`
  transform: rotate(${(props) => (props.open ? '180deg' : '0deg')});
`;
