import Select, { createFilter } from 'react-select';
import { Label } from './entitySearch.style';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import { prepareList } from '../../common/utils/apiTransformers';
import { useLecturerContext } from '../../common/context/lecturerContext';
import { useLocation } from 'react-router-dom';
import { usePreloadedListContext } from '../../common/context/preloadedListsContext';
import { routes } from '../../common/constants/routes';
import { useGroupContext } from '../../common/context/groupContext';


const EntitySearch = () => {
  const theme = useTheme();
  const location = useLocation();
  const [options, setOptions] = useState([]);

  const {lecturer, setLecturer} = useLecturerContext();
  const {group, setGroup} = useGroupContext();
  const lists = usePreloadedListContext();

  const isLecturer = location.pathname === routes.LECTURER;
  const list = isLecturer ? lists.lecturers : lists.groups;

  useEffect(() => {
    setGroup(null);
    setLecturer(null);
    setOptions(prepareList(list));
  }, [list]);

  const onOptionChange = option => {
    isLecturer ? setLecturer(option) : setGroup(option);
  };

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
        zIndex: 1000,
      };
    },
    menuList(base) {
      return {
        ...base,
        backgroundColor: theme['bgOptions'],
        zIndex: 1000,
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

  const filterConfig = {
    ignoreAccents: false,
  };

  return (
    <Label alignItems="center" gap="15px">
      Розклад занять для
      <div style={{width: '200px'}}>
        <Select
          options={options}
          onChange={onOptionChange}
          styles={customStyles}
          value={isLecturer ? lecturer : group}
          isSearchable={true}
          filterOptions={createFilter(filterConfig)}
          placeholder={null}
          name="color"/>
      </div>
    </Label>
  );
};

export default EntitySearch;
