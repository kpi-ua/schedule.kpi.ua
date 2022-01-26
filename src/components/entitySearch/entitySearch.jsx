import React, { useEffect, useState } from 'react';

import Select, { createFilter }  from 'react-select'; 
import { Label } from './entitySearch.style';
import { useTheme } from 'styled-components';
import { prepareList } from '../../common/utils/apiTransformers';
import { useLecturerContext } from '../../common/context/lecturerContext';
import { useHistory, useLocation } from 'react-router-dom';
import { usePreloadedListContext } from '../../common/context/preloadedListsContext';
import { routes } from '../../common/constants/routes';
import { useGroupContext } from '../../common/context/groupContext';


const useQuery = () => {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const EntitySearch = () => {
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();

  const [options, setOptions] = useState([]);
  const {lecturer, setLecturer} = useLecturerContext();
  const {group, setGroup} = useGroupContext();
  const lists = usePreloadedListContext();

  const isLecturer = location.pathname.includes(routes.LECTURER);
  const list = isLecturer ? lists.lecturers : lists.groups;

  const query = useQuery();

  useEffect(() => {
    if (isLecturer) {
      setGroup(null);
    } else {
      setLecturer(null);
    }
  }, [isLecturer])

  useEffect(() => {
    if (isLecturer) {
      const lecturer = query.get('lecturerId');
      setLecturer(lecturer);
      setGroup(null);
    } else {
      const group = query.get('groupName');
      setGroup(group);
      setLecturer(null);
    }

    setOptions(prepareList(list));
  }, [list]);

  const onOptionChange = option => {
    isLecturer ? setLecturer(option.value) : setGroup(option.label);

    if (isLecturer) {
      history.push('?lecturerId=' + option.value);
    } else {
      history.push('?groupName=' + option.label);
    }
  };

  const initialValue = options.find(item => isLecturer ? item.value === lecturer : item.label === group);

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
    matchFrom : "start"
  };

  return (
    <Label alignItems="center" gap="15px">
      Розклад занять для
      <div style={{width: '200px'}}>
        <Select
          options={options}
          onChange={onOptionChange}
          styles={customStyles}
          value={initialValue}
          filterOptions={createFilter(filterConfig)}
          isSearchable={true}
          placeholder={null}
          name="color"/>
      </div>
    </Label>
  );
};

export default EntitySearch;
