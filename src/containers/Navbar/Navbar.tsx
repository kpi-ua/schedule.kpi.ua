import { Logo } from '../../common/styles/styles';
import MainSettings from '../MainSettings';

export const Navbar = () => {
  return (
    <header className="bg-white p-6 shadow-header min-[989px]:px-9 min-[989px]:py-[30px]">
      <div className="grid grid-cols-1 items-center gap-4 min-[1441px]:grid-cols-[fit-content(185px)_1fr_185px] min-[1441px]:gap-0">
        <div className="flex items-center justify-start min-[1441px]:justify-center">
          <Logo />
        </div>
        <MainSettings />
      </div>
    </header>
  );
};
