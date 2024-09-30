import { getLocalStorageItem, setLocalStorageItem } from "../../common/utils/parsedLocalStorage";
import { useCallback, useEffect } from "react";

import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { SelectableEntityProvider } from '../context/types';
import { useHistory } from "react-router-dom";
import { useQueryParams } from '../../common/hooks/useQueryParams';

export const useEntitySearch = <T extends EntityWithNameAndId>(
  storageKey: string,
  items: T[],
  context: SelectableEntityProvider<T>
) => {
  const history = useHistory();
  const queryParams = useQueryParams();

  const setItemCallback = useCallback(
    (item?: T) => context.setItem(item),
    [context]
  );

  useEffect(() => {
    const itemId: string = queryParams.get(storageKey) || getLocalStorageItem(storageKey);

    if (!itemId) {
      return;
    }

    history.replace(`?${storageKey}=${itemId}`);

    const group = items.find(({ id }) => id === itemId);

    setItemCallback(group);
  }, [items, history, queryParams, setItemCallback, storageKey]);

  const handleChange = (item: T) => {
    context.setItem(item);
    history.push(`?${storageKey}=${item.id}`);
    setLocalStorageItem(storageKey, item.id);
  };

  return { handleChange };
};
