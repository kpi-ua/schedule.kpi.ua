import React from 'react';

import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Select } from 'react-select-virtualized';

import { useLecturerContext } from 'common/context/lecturerContext';
import { usePreloadedListContext } from 'common/context/preloadedListsContext';
import { useGroupContext } from 'common/context/groupContext';
import { prepareList } from 'common/utils/apiTransformers';
import { routes } from 'common/constants/routes';
import { getSelectCustomStyle } from 'common/constants/selectOptions';
import { getLocalStorageItem, setLocalStorageItem } from 'common/utils/parsedLocalStorage';

import { Label } from './entitySearch.style';

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
  }, [isLecturer, setGroup, setLecturer]);

  useEffect(() => {
    if (isLecturer) {
      let lecturer = query.get('lecturerId');
      const localStorageLecturerId = getLocalStorageItem('lecturerId');
      if (!lecturer && localStorageLecturerId) {
        lecturer = localStorageLecturerId;
        history.push('?lecturerId=' + localStorageLecturerId);
      }
      setLecturer(lecturer);
      setGroup(null);
    } else {
      let group = query.get('groupId');
      const localStorageLecturerId = getLocalStorageItem('groupId');
      if (!group && localStorageLecturerId) {
        group = localStorageLecturerId;
        history.push('?groupId=' + localStorageLecturerId);
      }
      const groupObj = list.find((g) => g.id === group);
      setGroup(groupObj);
      setLecturer(null);
    }
    setOptions(prepareList(list));
  }, [list, history, isLecturer, query, setGroup, setLecturer]);

  const onOptionChange = (option) => {
    isLecturer ? setLecturer(option.value) : setGroup({id: option.value, name: option.label});

    if (isLecturer) {
      history.push('?lecturerId=' + option.value);
      setLocalStorageItem('lecturerId', option.value);
    } else {
      history.push('?groupId=' + option.value);
      setLocalStorageItem('groupId', option.value);
    }
  };
  const initialValue =
    options.find((item) =>
      isLecturer ? item.value === lecturer : item.value === group?.id
    ) ?? null;
  return (
    <Label>
      Розклад занять для
      <div className="container">
        <Select
          options={options}
          onChange={onOptionChange}
          styles={getSelectCustomStyle(theme)}
          value={initialValue}
          isSearchable={true}
          isClearable={false}
          placeholder={null}
          name="color"
        />
      </div>
    </Label>
  );
};

export default EntitySearch;
