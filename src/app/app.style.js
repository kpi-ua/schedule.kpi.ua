import styled from 'styled-components';
import { getValueFromTheme } from 'common/utils/getValueFromTheme';

export const Wrapper = styled.div`
  background: ${getValueFromTheme('bgPrimary')};
  min-height: 105vh;
`;
