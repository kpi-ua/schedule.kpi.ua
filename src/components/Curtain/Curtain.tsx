import React, { useCallback, useEffect } from "react";

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface CurtainProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchor: React.RefObject<HTMLElement>;
}

const CurtainContainer = styled.div<{ top?: number }>`
  top: ${props => props.top}px;
  right: 0;
  left: 0;
  bottom: auto;
  flex: 1 0 auto;
  height: 0%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  flex-direction: column;

  background-color: #ffffff;
  width: 100%;

  overflow: hidden;

  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &.opened {
    height: calc(100% - ${props => props.top}px);
  }
`;

export const Curtain = ({ open, onClose, children, anchor }: CurtainProps) => {
  const history = useHistory();

  const onCloseCallback = useCallback(() => onClose, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  useEffect(() => {
    onCloseCallback();
  }, [onCloseCallback, history.location.pathname]);

  return (
    <CurtainContainer
      top={anchor.current?.getBoundingClientRect().bottom}
      className={`${open ? 'opened' : ''}`}
    >
      {children}
    </CurtainContainer>
  );
};
