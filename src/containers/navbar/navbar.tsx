import { Logo } from '../../common/styles/styles';
import MainSettings from '../mainSettings';
import { NavbarLogo, NavBarWrapper, NavbarGrid, ThemeSwitchWrapper } from './navbar.style';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <NavBarWrapper>
      <NavbarGrid>
        <NavbarLogo>
          <Logo src={logo} alt={'logo'} />
        </NavbarLogo>
        <MainSettings />
        <ThemeSwitchWrapper></ThemeSwitchWrapper>
      </NavbarGrid>
    </NavBarWrapper>
  );
};

export default Navbar;
