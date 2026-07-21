import LogoIcon from '../../assets/logo.svg?react';
import MainSettings from '../MainSettings';

export const Navbar = () => {
  return (
    <header className="bg-white p-[24px] shadow-header min-[989px]:px-[36px] min-[989px]:py-[30px]">
      <div className="grid grid-cols-1 items-center gap-[16px] min-[1441px]:grid-cols-[fit-content(185px)_1fr_185px] min-[1441px]:gap-0">
        <div className="flex items-center justify-start min-[1441px]:justify-center">
          <LogoIcon className="max-h-10 w-full max-w-[116px] min-[1441px]:max-h-16 min-[1441px]:max-w-[185px]" />
        </div>
        <MainSettings />
      </div>
    </header>
  );
};
