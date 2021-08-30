import { Logo, Flex } from '../../common/styles/styles';
import MainSettings from '../mainSettings/mainSettings';
import { NavBarWrapper } from './navbar.style';

const Navbar = () => {
  return (
    <NavBarWrapper>
      <Flex justifyContent='space-between' alignItems='center' mx={2}>
        <Logo/>
        <MainSettings/>
        <div>Theme switcher</div>
      </Flex>
    </NavBarWrapper>
  );
};

export default Navbar;
