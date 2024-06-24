import styled from 'styled-components';
import { getValueFromTheme } from '@/common/utils/getValueFromTheme';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${getValueFromTheme('primaryFontColor')};
`;

