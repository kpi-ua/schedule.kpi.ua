import { mediaReverse } from '../../../common/styles/styles';
import { Curtain } from '../../../components/Curtain';
import { MenuLink } from './MenuLink';
import { NAV_LINKS } from './constants';
import BurgerIcon from '../../../assets/icons/burger.svg?react';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import XIcon from '../../../assets/icons/x.svg?react';

interface MobileMenuProps {
  pathname: string;
  anchor: React.RefObject<HTMLElement>;
}

const BurgerMenuButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  width: 32px;
  height: 32px;
  background: none;
  aspect-ratio: 1 / 1;

  ${mediaReverse.extraSmallMode} {
    display: none;
  }
`;

const BurgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const BurgerMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BurgerMenuLink = styled(MenuLink)`
  font-size: 2rem;
  font-weight: 500;
`;

export const MobileMenu = ({ pathname, anchor }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  return (
    <>
      <BurgerMenuButton onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? <XIcon /> : <BurgerIcon />}
      </BurgerMenuButton>
      <Curtain open={menuOpen} onClose={handleClose} anchor={anchor}>
        <BurgerMenuContainer>
          <BurgerMenuNav>
            {NAV_LINKS.map(({ path, title }) => (
              <BurgerMenuLink key={path} className={pathname === path ? 'selected' : ''} href={path}>
                {title}
              </BurgerMenuLink>
            ))}
          </BurgerMenuNav>
        </BurgerMenuContainer>
      </Curtain>
    </>
  );
};
