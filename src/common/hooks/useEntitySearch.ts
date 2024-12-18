import { getLocalStorageItem, setLocalStorageItem } from '../utils/parsedLocalStorage';
import { useEffect } from 'react';

import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useEntitySearch = <T extends EntityWithNameAndId>(
  storageKey: string,
  items: T[],
  setValue: (value?: T) => void,
) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const itemId: string = searchParams.get(storageKey) || getLocalStorageItem(storageKey);

    if (!itemId) {
      return;
    }

    setSearchParams({ [storageKey]: itemId }, { replace: true });

    const group = items.find(({ id }) => id === itemId);
    setValue(group);
  }, [items, searchParams, storageKey]);

  const handleChange = (item: T) => {
    setValue(item);

    navigate(`?${storageKey}=${item.id}`, { replace: true });

    setLocalStorageItem(storageKey, item.id);
  };

  return { handleChange };
};
