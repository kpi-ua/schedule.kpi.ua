import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  background-color: ${getValueFromTheme('bgTable')};
  border-radius: 20px;
  border: 2px solid ${getValueFromTheme('neutral100')};
  position: relative;
`;