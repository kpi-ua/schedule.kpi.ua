import { Logo } from '../../common/styles/styles';
import MainSettings from '../MainSettings';

const Navbar = () => {
  return (
    <header className="bg-bg-header px-9 py-[30px] shadow-[0_3px_2px_-2px_var(--color-shadow-color)] max-[988px]:p-6">
      <div className="grid grid-cols-[fit-content(185px)_1fr_185px] grid-rows-1 items-center max-[1440px]:grid-cols-1 max-[1440px]:grid-rows-[fit-content(40px)_1fr] max-[1440px]:gap-4">
        <div className="flex items-center justify-center max-[1440px]:justify-start">
          <Logo />
        </div>
        <MainSettings />
      </div>
    </header>
  );
};

export default Navbar;
