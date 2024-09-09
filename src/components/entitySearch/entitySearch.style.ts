import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const EntitySearchWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 15px;
  color: ${getValueFromTheme('secondaryFontColor')};
  width: 100%;
`;

export const SelectWrapper = styled.div`
  min-width: 200px;
  flex-grow: 1;
`;

