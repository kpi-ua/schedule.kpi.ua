import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { media } from '../../common/styles/styles';

export const ExamsListWrapper = styled.div`
  margin: 0px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  ${media.extraSmallMode} {
    margin: 0px 16px 16px;
  }
`;

export const Header = styled.h1`
  margin: 64px 32px;
  color: ${getValueFromTheme('neutral900')};
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;

  ${media.extraSmallMode} {
    font-size: 24px;
    margin: 32px 16px;
  }
`;

export const WordAccent = styled.span`
  font-weight: 600;
  color: ${getValueFromTheme('basicBlack')};
`;
