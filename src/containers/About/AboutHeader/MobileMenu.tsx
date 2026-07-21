import { MenuLink } from './MenuLink';
import { NAV_LINKS } from './constants';
import BurgerIcon from '../../../assets/icons/burger.svg?react';
import { useEffect, useState } from 'react';
import XIcon from '../../../assets/icons/x.svg?react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../../../components/ui/sheet';

interface MobileMenuProps {
  pathname: string;
  anchor: React.RefObject<HTMLElement>;
}

export const MobileMenu = ({ pathname, anchor }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);

  useEffect(() => setMenuOpen(false), [pathname]);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setMenuTop(anchor.current?.getBoundingClientRect().bottom ?? 0);
    }
    setMenuOpen(open);
  };

  return (
    <Sheet modal={false} open={menuOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button
          className="m-0 aspect-square h-8 w-8 border-0 bg-transparent p-0 xs:hidden"
        >
          {menuOpen ? <XIcon /> : <BurgerIcon />}
        </button>
      </SheetTrigger>
      <SheetContent
        style={{ top: menuTop, '--sheet-top': `${menuTop}px` } as React.CSSProperties}
      >
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
      </SheetContent>
    </Sheet>
  );
};
