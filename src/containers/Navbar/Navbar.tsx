import LogoIcon from '../../assets/logo.svg?react';
import NavLinks from './NavLinks';

interface Props {
  settings: React.ReactNode;
}

export const Navbar = ({ settings }: Props) => {
  return (
    <header className="bg-white p-p shadow-header lg:px-9 lg:py-7.5">
      <div className="grid grid-cols-1 items-center gap-4 2xl:grid-cols-[fit-content(185px)_1fr_185px] 2xl:gap-0">
        <div className="flex items-center justify-start 2xl:justify-center">
          <LogoIcon className="max-h-10 w-full max-w-29 2xl:max-h-16 2xl:max-w-46.25" />
        </div>
        <div className="flex grow flex-col items-center gap-6 leading-[1.43] max-lg:w-full">
          <NavLinks />
          <div className="flex gap-5 max-lg:flex-col max-lg:items-center max-sm:w-full">{settings}</div>
        </div>
      </div>
    </header>
  );
};
