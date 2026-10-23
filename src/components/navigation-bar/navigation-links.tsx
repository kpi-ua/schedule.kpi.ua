'use client';

import dynamic from 'next/dynamic';

import { routes } from '@/lib/constants/routes';

// Load dynamically to avoid accessing local storage during prerendering
const NavigationLink = dynamic(() => import('./navigation-link').then(({ NavigationLink }) => NavigationLink), {
  ssr: false,
});

const scheduleLinks = [
  { value: routes.INDEX, label: 'Розклад занять' },
  { value: routes.SESSION, label: 'Розклад сесії' },
  { value: routes.LECTURER, label: 'Розклад для викладачів' },
];

export const NavigationLinks = () => {
  return (
    <nav className="flex max-w-[calc(100vw-3rem)] snap-x snap-mandatory scrollbar-none items-center justify-between gap-9.25 overflow-x-scroll whitespace-nowrap [&::-webkit-scrollbar]:hidden">
      {scheduleLinks.map(({ value, label }) => (
        <NavigationLink key={value} label={label} value={value} />
      ))}
    </nav>
  );
};
