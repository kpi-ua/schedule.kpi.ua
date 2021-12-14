import styled, { css } from 'styled-components';
import { ScheduleItemMixin } from '../../common/styles/styles';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const ScheduleItemExtendedWrapper = styled.div`
  grid-row-start: span ${props => props.items};
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
  padding: 20px 25px 16px;
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

  &:not(:first-child) {
    border-top: 0.5px dashed #141518;

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
  background-color: ${getValueFromTheme('bgOptions')};
  color: ${getValueFromTheme('primaryFontColor')};
  border-radius: 0 0 15px 15px;
  text-align: center;
  padding: 15px;
  cursor: pointer;
`