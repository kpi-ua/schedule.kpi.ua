'use client';

import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { ListOption } from '../../types/ListOption';
import Select from 'react-select';
import { getSelectCustomStyle } from '../../common/constants/selectOptions';
import { useId, useMemo } from 'react';

interface SearchSelectProps<T extends EntityWithNameAndId> {
  options: T[];
  value?: T;
  onChange: (item: T) => void;
}

const SearchSelect = <T extends EntityWithNameAndId>({ options, value, onChange }: SearchSelectProps<T>) => {
  // react-select auto-generates its instance id, which can mismatch between server/client renders; pin it with useId().
  const instanceId = useId();
  const selectOptions = useMemo(() => options.map(({ id, name }) => ({ label: name, value: id })), [options]);

  const handleChange = (option: ListOption<string> | null) => {
    if (!option) return;

    const item = options.find((x) => x.id === option.value);

    if (item) {
      onChange(item);
    }
  };

  // If no option found, value shoud be `null`: https://github.com/JedWatson/react-select/issues/3066
  const selectedValue = selectOptions.find((item) => value?.id === item.value) || null;

  return (
    <div className="min-w-75 grow max-sm:w-full max-sm:min-w-0">
      <Select
        instanceId={instanceId}
        options={selectOptions}
        onChange={handleChange}
        styles={getSelectCustomStyle()}
        value={selectedValue}
        isSearchable={true}
        isClearable={false}
        placeholder={null}
        name="searchSelect"
      />
    </div>
  );
};

export default SearchSelect;
