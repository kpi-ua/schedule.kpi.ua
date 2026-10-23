'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { useNavigationPendingContext } from '../context/navigation-pending-context';

// Restores the last-selected entity from localStorage when the URL has no param yet,
// and keeps localStorage in sync when the user picks a new one. The selected entity
// itself is resolved server-side from the URL searchParams, not from client state.
export const useEntitySearch = (storageKey: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(storageKey);
  const [storedValue, setStoredValue] = useLocalStorage<string | null>(storageKey);
  const { startTransition } = useNavigationPendingContext();

  useEffect(() => {
    if (paramValue || !storedValue) {
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set(storageKey, storedValue);
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }, [paramValue, storedValue, storageKey, pathname, router, searchParams, startTransition]);

  const handleChange = (id: string) => {
    setStoredValue(id);

    const params = new URLSearchParams(searchParams);
    params.set(storageKey, id);
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return { handleChange };
};
