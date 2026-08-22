import LogoIcon from '../../assets/logo.svg?react';
import MainSettings from '../MainSettings';

export const Navbar = () => {
  return (
    <header className="bg-white p-[24px] shadow-header lg:px-[36px] lg:py-[30px]">
      <div className="grid grid-cols-1 items-center gap-[16px] 2xl:grid-cols-[fit-content(185px)_1fr_185px] 2xl:gap-0">
        <div className="flex items-center justify-start 2xl:justify-center">
          <LogoIcon className="max-h-10 w-full max-w-[116px] 2xl:max-h-16 2xl:max-w-[185px]" />
        </div>
        <MainSettings />
      </div>
    </header>
  );
};
