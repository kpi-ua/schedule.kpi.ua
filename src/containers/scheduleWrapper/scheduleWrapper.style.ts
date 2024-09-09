import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  background-color: ${getValueFromTheme('bgTable')};
  border-radius: 20px;
  border: 2px solid ${getValueFromTheme('neutral100')};
  margin: 36px;
  position: relative;
`;