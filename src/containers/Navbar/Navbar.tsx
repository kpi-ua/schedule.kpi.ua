import LogoIcon from '../../assets/logo.svg?react';
import MainSettings from '../MainSettings';
import { Group } from '../../models/Group';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';

interface Props {
  groups: Group[];
  lecturers: EntityWithNameAndId[];
}

export const Navbar = ({ groups, lecturers }: Props) => {
  return (
    <header className="bg-white p-p shadow-header lg:px-9 lg:py-7.5">
      <div className="grid grid-cols-1 items-center gap-4 2xl:grid-cols-[fit-content(185px)_1fr_185px] 2xl:gap-0">
        <div className="flex items-center justify-start 2xl:justify-center">
          <LogoIcon className="max-h-10 w-full max-w-29 2xl:max-h-16 2xl:max-w-46.25" />
        </div>
        <MainSettings groups={groups} lecturers={lecturers} />
      </div>
    </header>
  );
};
