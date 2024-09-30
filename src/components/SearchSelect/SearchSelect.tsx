import "./SearchSelect.scss";

import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';
import { ListOption } from '../../types/ListOption';
import { Select } from "react-select-virtualized";
import { getSelectCustomStyle } from "../../common/constants/selectOptions";
import { media } from '../../common/styles/styles';
import styled from 'styled-components';
import { useMemo } from "react";
import { useTheme } from "styled-components";

const SelectWrapper = styled.div`
  min-width: 300px;
  flex-grow: 1;

  ${media.extraSmallMode} {
    min-width: auto;
    width: 100%;
  }
`;

interface SearchSelectProps<T extends EntityWithNameAndId> {
  options: T[];
  value?: T;
  onChange: (item: T) => void;
}

const SearchSelect = <T extends EntityWithNameAndId,>({
  options,
  value,
  onChange,
}: SearchSelectProps<T>) => {
  const theme = useTheme();

  const selectOptions = useMemo(() => options.map(({ id, name }) => ({ label: name, value: id })), [options]);

  const handleChange = (option: ListOption<string>) => {
    const item = options.find(x => x.id === option.value);

    if (item) {
      onChange(item);
    }
  };

  // If no option found, value shoud be `null`: https://github.com/JedWatson/react-select/issues/3066
  const selectedValue = selectOptions.find(item => value?.id === item.value) || null;

  return (
    <SelectWrapper>
      <Select
        options={selectOptions}
        onChange={handleChange}
        styles={getSelectCustomStyle(theme)}
        value={selectedValue}
        isSearchable={true}
        isClearable={false}
        placeholder={null}
        name="searchSelect"
      />
    </SelectWrapper>
  );
};

export default SearchSelect;
