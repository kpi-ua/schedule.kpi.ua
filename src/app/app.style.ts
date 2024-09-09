import styled from 'styled-components';
import { getValueFromTheme } from '../common/utils/getValueFromTheme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${getValueFromTheme('bgPrimary')};
  min-height: 100vh;
`;
