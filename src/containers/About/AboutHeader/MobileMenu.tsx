import { Curtain } from '../../../components/Curtain';
import { MenuLink } from './MenuLink';
import { NAV_LINKS } from './constants';
import BurgerIcon from '../../../assets/icons/burger.svg?react';
import { useCallback, useState } from 'react';
import XIcon from '../../../assets/icons/x.svg?react';

interface MobileMenuProps {
  pathname: string;
  anchor: React.RefObject<HTMLElement>;
}

export const MobileMenu = ({ pathname, anchor }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  return (
    <>
      <button
        className="m-0 aspect-square h-8 w-8 border-0 bg-transparent p-0 xs:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <XIcon /> : <BurgerIcon />}
      </button>
      <Curtain open={menuOpen} onClose={handleClose} anchor={anchor}>
        <div className="flex flex-col p-4">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map(({ path, title }) => (
              <MenuLink
                key={path}
                className={`text-[2rem] font-medium ${pathname === path ? 'selected' : ''}`}
                href={path}
              >
                {title}
              </MenuLink>
            ))}
          </nav>
        </div>
      </Curtain>
    </>
  );
};
