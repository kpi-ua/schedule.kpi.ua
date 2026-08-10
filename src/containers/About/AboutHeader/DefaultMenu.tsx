import { MenuLink } from './MenuLink';
import { NAV_LINKS } from './constants';

interface DefaultMenuProps {
  pathname: string;
}

export const DefaultMenu = ({ pathname }: DefaultMenuProps) => {
  return (
    <nav className="flex gap-4 max-xs:hidden">
      {NAV_LINKS.map(({ path, title }) => (
        <MenuLink key={path} className={pathname === path ? 'selected' : ''} href={path}>
          {title}
        </MenuLink>
      ))}
    </nav>
  );
};
