import React, { useEffect, useState } from 'react';
import { Select } from 'react-select-virtualized';

import { Label } from './entitySearch.style';

import { useLecturerContext } from '../../common/context/lecturerContext';
import { useHistory, useLocation } from 'react-router-dom';
import { usePreloadedListContext } from '../../common/context/preloadedListsContext';
import { useGroupContext } from '../../common/context/groupContext';
import { useTheme } from 'styled-components';

import { prepareList } from '../../common/utils/apiTransformers';
import { routes } from '../../common/constants/routes';

import { getSelectCustomStyle } from '../../common/constants/selectOptions';
import './entitySearch.scss';


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

  const initialValue = options.find(item => isLecturer ? item.value === lecturer : item.label === group) ?? null;

  return (
    <Label alignItems="center" gap="15px">
      Розклад занять для
      <div style={{width: '200px'}}>
        <Select
          options={options}
          onChange={onOptionChange}
          styles={getSelectCustomStyle(theme)}
          value={initialValue}
          isSearchable={true}
          isClearable={false}
          placeholder={null}
          name="color"/>
      </div>
    </Label>
  );
};

export default EntitySearch;
