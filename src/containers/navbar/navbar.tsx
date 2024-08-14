import { Logo } from '../../common/styles/styles';
import MainSettings from '../mainSettings';
import { NavbarInner, NavBarWrapper } from './navbar.style';
import ThemeSwitch from '../../components/themeSwitch';
import logo from '../../assets/logo.svg';
import { useThemeSelectorContext } from '../../common/context/themeContext';

const Navbar = () => {
  const { currentTheme, changeTheme } = useThemeSelectorContext();

  return (
    <NavBarWrapper>
      <NavbarInner justifyContent="space-between" mx={2} gap={'20px'}>
        <Logo src={logo} alt={'logo'}/>
        <MainSettings/>
        <ThemeSwitch value={currentTheme} onChange={changeTheme}/>
      </NavbarInner>
    </NavBarWrapper>
  );
};

export default Navbar;
