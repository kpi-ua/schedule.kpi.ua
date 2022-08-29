import logo from 'assets/logo.svg';
import { useThemeSelectorContext } from 'common/context/themeContext';

import { Logo } from 'common/styles/styles';
import MainSettings from 'containers/mainSettings';
import { NavbarInner, NavBarWrapper } from './navbar.style';
import Switch from 'components/switch';

const Navbar = () => {
  const selectTheme = useThemeSelectorContext();

  return (
    <NavBarWrapper>
      <NavbarInner justifyContent="space-between" mx={2} gap={'20px'}>
        <Logo src={logo} alt={'logo'}/>
        <MainSettings/>
        <Switch onChange={selectTheme}/>
      </NavbarInner>
    </NavBarWrapper>
  );
};

export default Navbar;
