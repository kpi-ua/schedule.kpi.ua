import { getLocalStorageItem, setLocalStorageItem } from "../../common/utils/parsedLocalStorage";
import { useEffect } from "react";

import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { useHistory } from "react-router-dom";
import { useQueryParams } from '../../common/hooks/useQueryParams';

export const useEntitySearch = <T extends EntityWithNameAndId>(
  storageKey: string,
  items: T[],
  setValue: (value?: T) => void
) => {
  const history = useHistory();
  const queryParams = useQueryParams();

  useEffect(() => {
    const itemId: string = queryParams.get(storageKey) || getLocalStorageItem(storageKey);

    if (!itemId) {
      return;
    }

    history.replace(`?${storageKey}=${itemId}`);

    const group = items.find(({ id }) => id === itemId);

    setValue(group);
  }, [items, history, queryParams, storageKey]);

  const handleChange = (item: T) => {
    setValue(item);
    history.push(`?${storageKey}=${item.id}`);
    setLocalStorageItem(storageKey, item.id);
  };

  return { handleChange };
};
