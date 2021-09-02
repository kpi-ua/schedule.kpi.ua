import styled from 'styled-components';
import { flexbox, space } from 'styled-system';

export const Flex = styled.div`
  display: flex;
  ${space};
  ${flexbox};

  // Support for gap in flexbox
  gap: ${(props) => props.gap};
`;

const LogoComponent = () => (<h2>LOGO</h2>);

export const Logo = styled(LogoComponent)`
  max-width: 200px;
  width: 100%;
  height: auto;
`;
