'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import GroupSearch from '../../components/GroupSearch';
import LecturerSearch from '../../components/LecturerSearch';
import WeekSwitch from '../../components/WeekSwitch';
import { routes } from '../../common/constants/routes';
import { getLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { cn } from '../../common/utils/cn';
import { Group } from '../../models/Group';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';

const scheduleLinks = [
  { value: routes.INDEX, label: 'Розклад занять' },
  { value: routes.SESSION, label: 'Розклад сесії' },
  { value: routes.LECTURER, label: 'Розклад для викладачів' },
];

interface Props {
  groups: Group[];
  lecturers: EntityWithNameAndId[];
}

const MainSettings = ({ groups, lecturers }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getLinkUrl = (url: string) => {
    if (url === routes.LECTURER) {
      const savedLecturerId = searchParams.get('lecturerId') ?? getLocalStorageItem<string>('lecturerId');
      return savedLecturerId ? `${url}?lecturerId=${savedLecturerId}` : url;
    }

    const savedGroupId = searchParams.get('groupId') ?? getLocalStorageItem<string>('groupId');
    return savedGroupId ? `${url}?groupId=${savedGroupId}` : url;
  };

  return (
    <div className="flex grow flex-col items-center gap-6 leading-[1.43] max-lg:w-full">
      <nav className="flex max-w-[calc(100vw-3rem)] snap-x snap-mandatory items-center justify-between gap-9.25 overflow-x-scroll whitespace-nowrap scrollbar-none [&::-webkit-scrollbar]:hidden">
        {scheduleLinks.map(({ value, label }) => {
          const isActive = pathname === value;

          return (
            <Link
              key={value}
              href={getLinkUrl(value)}
              className={cn(
                "relative cursor-pointer snap-center text-[18px] leading-[1.43] font-bold tracking-[0.01em] text-black no-underline snap-always after:-top-3 after:hidden after:h-0.5 after:rounded-md after:bg-black after:content-['']",
                isActive && 'after:block',
              )}
              onClick={(event) =>
                event.currentTarget.scrollIntoView({
                  inline: 'center',
                  block: 'nearest',
                  behavior: 'smooth',
                })
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="flex gap-5 max-lg:flex-col max-lg:items-center max-sm:w-full">
        {pathname === routes.INDEX && (
          <>
            <GroupSearch groups={groups} />
            <WeekSwitch />
          </>
        )}
        {pathname === routes.SESSION && <GroupSearch groups={groups} />}
        {pathname === routes.LECTURER && (
          <>
            <LecturerSearch lecturers={lecturers} />
            <WeekSwitch />
          </>
        )}
      </div>
    </div>
  );
};

export default MainSettings;
