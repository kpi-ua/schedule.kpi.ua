import { MenuLink } from './MenuLink';
import { NAV_LINKS } from './constants';
import { media } from '../../../common/styles/styles';
import styled from 'styled-components';

interface DefaultMenuProps {
  pathname: string;
}

const NavMain = styled.nav`
  display: flex;
  gap: 1rem;

  ${media.extraSmallMode} {
    display: none;
  }
`;

export const DefaultMenu = ({ pathname }: DefaultMenuProps) => {
  return (
    <NavMain>
      {NAV_LINKS.map(({ path, title }) => (
        <MenuLink className={pathname === path ? 'selected' : ''} href={path}>{title}</MenuLink>
      ))}
    </NavMain>
  );
};
