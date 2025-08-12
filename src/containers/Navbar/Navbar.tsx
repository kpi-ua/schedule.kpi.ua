import { Logo } from '../../common/styles/styles';
import MainSettings from '../MainSettings';
import { NavbarLogo, NavBarWrapper, NavbarGrid } from './Navbar.style';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <NavBarWrapper>
      <NavbarGrid>
        <NavbarLogo>
          <Logo src={logo} alt="logo" />
        </NavbarLogo>
        <MainSettings />
      </NavbarGrid>
    </NavBarWrapper>
  );
};

export default Navbar;
