'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { routes } from '../../common/constants/routes';
import queryString from 'query-string';
import { cn } from '../../common/utils/cn';
import { useLocalStorage } from 'react-use';

interface Props {
  value: string;
  label: string;
}

export const NavLink = ({ value, label }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [groupId] = useLocalStorage<string | null>('groupId', searchParams.get('groupId'));
  const [lecturerId] = useLocalStorage<string | null>('lecturerId', searchParams.get('lecturerId'));

  const getLinkUrl = (url: string) => {
    const query = url === routes.LECTURER ? { lecturerId } : { groupId };

    return queryString.stringifyUrl(
      {
        url,
        query,
      },
      { skipNull: true },
    );
  };

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
};
