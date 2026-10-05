'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/parsedLocalStorage';

// Restores the last-selected entity from localStorage when the URL has no param yet,
// and keeps localStorage in sync when the user picks a new one. The selected entity
// itself is resolved server-side from the URL searchParams, not from client state.
export const useEntitySearch = (storageKey: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(storageKey);
  const storedValue = getLocalStorageItem<string>(storageKey);

  useEffect(() => {
    if (paramValue || !storedValue) {
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set(storageKey, storedValue);
    router.replace(`${pathname}?${params.toString()}`);
  }, [paramValue, storedValue, storageKey, pathname, router, searchParams]);

  const handleChange = (id: string) => {
    setLocalStorageItem(storageKey, id);

    const params = new URLSearchParams(searchParams);
    params.set(storageKey, id);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return { handleChange };
};
