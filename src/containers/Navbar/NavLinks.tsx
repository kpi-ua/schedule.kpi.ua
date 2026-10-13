'use client';

import { routes } from '../../common/constants/routes';
import dynamic from 'next/dynamic';

// Load dynamically to avoid accessing local storage during prerendering
const NavLink = dynamic(() => import('./NavLink').then(({ NavLink }) => NavLink), {
  ssr: false,
});

const scheduleLinks = [
  { value: routes.INDEX, label: 'Розклад занять' },
  { value: routes.SESSION, label: 'Розклад сесії' },
  { value: routes.LECTURER, label: 'Розклад для викладачів' },
];

const NavLinks = () => {
  return (
    <nav className="flex max-w-[calc(100vw-3rem)] snap-x snap-mandatory items-center justify-between gap-9.25 overflow-x-scroll whitespace-nowrap scrollbar-none [&::-webkit-scrollbar]:hidden">
      {scheduleLinks.map(({ value, label }) => (
        <NavLink key={value} label={label} value={value} />
      ))}
    </nav>
  );
};

export default NavLinks;
