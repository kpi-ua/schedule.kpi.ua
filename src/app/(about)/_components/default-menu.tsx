import { NAV_LINKS } from '../constants';
import { MenuLink } from './menu-link';

interface DefaultMenuProps {
  pathname: string;
}

export const DefaultMenu = ({ pathname }: DefaultMenuProps) => {
  return (
    <nav className="flex gap-4 max-sm:hidden">
      {NAV_LINKS.map(({ path, title }) => (
        <MenuLink key={path} className={pathname === path ? 'selected' : ''} href={path}>
          {title}
        </MenuLink>
      ))}
    </nav>
  );
};
