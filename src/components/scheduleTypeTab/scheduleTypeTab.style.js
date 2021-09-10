import styled from 'styled-components';

export const Tab = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #141518;
  cursor: pointer;
  &:after {
    content: '';
    top: -12px;
    border-radius: 6px;
    height: 2px;
    background-color: #141518;
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;
