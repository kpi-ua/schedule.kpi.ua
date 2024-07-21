import { Logo } from '../../common/styles/styles';
import MainSettings from '../mainSettings';
import { NavbarInner, NavBarWrapper } from './navbar.style';
import Switch from '../../components/switch';
import logo from '../../assets/logo.svg';
import { useThemeSelectorContext } from '../../common/context/themeContext';

const Navbar = () => {
  const selectTheme = useThemeSelectorContext();

  return (
    <NavBarWrapper>
      <NavbarInner justifyContent="space-between" mx={2} gap={'20px'}>
        <Logo src={logo} alt={'logo'}/>
        <MainSettings/>
        <Switch onChange={selectTheme as any}/>
      </NavbarInner>
    </NavBarWrapper>
  );
};

export default Navbar;
