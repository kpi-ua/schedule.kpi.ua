import Select from 'react-select';
import { Label } from './groupSearch.style';
import { useTheme } from 'styled-components';
import { groups } from '../../mock';


const GroupSearch = () => {
  const theme = useTheme();

  const customStyles = {
    option(base) {
      return {
        ...base,
        color: theme['primaryFontColor'],
      };
    },
    menu(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
        zIndex: 5,
      };
    },
    menuList(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
      };
    },
    control(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
        color: theme['primaryFontColor'],
        border: 'none',
      };
    },
    indicatorSeparator(base) {
      return {
        ...base,
        display: 'none'
      };
    },
    singleValue(base) {
      return {
        ...base,
        color: theme['primaryFontColor']
      };
    },
    input(base) {
      return {
        ...base,
        color: theme['primaryFontColor']
      };
    }
  };

  return (
    <Label alignItems="center" gap="15px">
      Розклад занять для
      <div style={{width: '150px'}}>
        <Select
          options={groups}
          styles={customStyles}
          isClearable={true}
          isSearchable={true}
          placeholder={null}
          name="color"/>
      </div>
    </Label>
  );
};

export default GroupSearch;
