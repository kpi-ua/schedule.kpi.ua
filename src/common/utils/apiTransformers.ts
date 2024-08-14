import { uniqBy } from 'lodash-es';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { ListOption } from '../../types/ListOption';

export const prepareList = (list: EntityWithNameAndId[]): ListOption<string>[] => {
  const items = list.reduce((acc: ListOption<string>[], item: EntityWithNameAndId) => {
    if (item.name === '' || item.id === '') {
      return acc;
    }

    return [
      ...acc,
      { label: item.name, value: item.id }
    ];
  }, []).sort((a, b) => a.label.localeCompare(b.label, 'uk'));

  return uniqBy(items, x => x.label);
};
