import { Logo } from '../../common/styles/styles';
import MainSettings from '../MainSettings';
import { NavbarLogo, NavBarWrapper, NavbarGrid } from './Navbar.style';

const Navbar = () => {
  return (
    <NavBarWrapper>
      <NavbarGrid>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <MainSettings />
      </NavbarGrid>
    </NavBarWrapper>
  );
};

export default Navbar;
