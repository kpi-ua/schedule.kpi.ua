'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import { useNavigationPendingContext } from '@/lib/context/navigation-pending-context';
import { EntityIdKey, parseEntityId } from '@/lib/utils/entity-id.utils';

// Restores the last-selected entity from localStorage when the URL has no param yet,
// and keeps localStorage in sync when the user picks a new one. The selected entity
// itself is resolved server-side from the URL searchParams, not from client state.
// An id Campus API does not accept (e.g. a UUID of the previous schedule app) is
// dropped from both, so the page falls back to "nothing selected".
export const useEntitySearch = (storageKey: EntityIdKey) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(storageKey);
  const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage<string | null>(storageKey);
  const { startTransition } = useNavigationPendingContext();

  const replaceParam = useCallback(
    (value: string | null) => {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set(storageKey, value);
      } else {
        params.delete(storageKey);
      }

      const query = params.toString();
      startTransition(() => {
        router.replace(query ? `${pathname}?${query}` : pathname);
      });
    },
    [searchParams, storageKey, pathname, router, startTransition],
  );

  useEffect(() => {
    if (storedValue && !parseEntityId(storageKey, storedValue)) {
      removeStoredValue();
      return;
    }

    if (paramValue && !parseEntityId(storageKey, paramValue)) {
      replaceParam(null);
      return;
    }

    if (paramValue || !storedValue) {
      return;
    }

    replaceParam(storedValue);
  }, [paramValue, storedValue, storageKey, removeStoredValue, replaceParam]);

  const handleChange = (id: string) => {
    setStoredValue(id);
    replaceParam(id);
  };

  return { handleChange };
};
