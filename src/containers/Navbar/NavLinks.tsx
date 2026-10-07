'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { routes } from '../../common/constants/routes';
import { getLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { cn } from '../../common/utils/cn';

const scheduleLinks = [
  { value: routes.INDEX, label: 'Розклад занять' },
  { value: routes.SESSION, label: 'Розклад сесії' },
  { value: routes.LECTURER, label: 'Розклад для викладачів' },
];

const NavLinks = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // localStorage isn't available during SSR, so defer reading it until after mount
  // to keep the first client render identical to the server-rendered markup.
  const [savedIds, setSavedIds] = useState<{ groupId?: string; lecturerId?: string }>({});

  useEffect(() => {
    setSavedIds({
      groupId: getLocalStorageItem<string>('groupId'),
      lecturerId: getLocalStorageItem<string>('lecturerId'),
    });
  }, []);

  const getLinkUrl = (url: string) => {
    if (url === routes.LECTURER) {
      const savedLecturerId = searchParams.get('lecturerId') ?? savedIds.lecturerId;
      return savedLecturerId ? `${url}?lecturerId=${savedLecturerId}` : url;
    }

    const savedGroupId = searchParams.get('groupId') ?? savedIds.groupId;
    return savedGroupId ? `${url}?groupId=${savedGroupId}` : url;
  };

  return (
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
  );
};

export default NavLinks;
