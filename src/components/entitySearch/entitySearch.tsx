import React, { useEffect, useState } from "react";
import { Select } from "react-select-virtualized";

import { Label } from "./entitySearch.style";

import { useLecturerContext } from "../../common/context/lecturerContext";
import { useHistory, useLocation } from "react-router-dom";
import { usePreloadedListContext } from "../../common/context/preloadedListsContext";
import { useGroupContext } from "../../common/context/groupContext";
import { useTheme } from "styled-components";

import { prepareList } from "../../common/utils/apiTransformers";
import { routes } from "../../common/constants/routes";

import { getSelectCustomStyle } from "../../common/constants/selectOptions";
import "./entitySearch.scss";
import { getLocalStorageItem, setLocalStorageItem } from "../../common/utils/parsedLocalStorage";
import { ListOption } from '../../types/ListOption';
import { Lecturer } from '../../models/Lecturer';
import { Group } from '../../models/Group';
import { EntityWithNameAndId } from '../../models/EntityWithNameAndId';

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const EntitySearch = () => {
  const [options, setOptions] = useState<ListOption<string>[]>([]);
  
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();

  const lists = usePreloadedListContext();
  const groupContext = useGroupContext();
  const lecturerContext = useLecturerContext();

  const isLecturer = location.pathname.includes(routes.LECTURER);
  const list: EntityWithNameAndId[] = isLecturer ? lists.lecturers : lists.groups;

  const query = useQuery();

  useEffect(() => {
    if (isLecturer) {
      groupContext.setGroup(undefined);
    } else {
      lecturerContext.setLecturer(undefined);
    }
  }, [isLecturer]);

  useEffect(() => {
    if (isLecturer) {
      let lecturerId = query.get("lecturerId");
      const localStorageLecturerId = getLocalStorageItem("lecturerId")
      if(!lecturerId && localStorageLecturerId){
        lecturerId= localStorageLecturerId;
        history.replace("?lecturerId=" + localStorageLecturerId);
      }
      const lecturer = list.find(x => x.id === lecturerId) as Lecturer;
      lecturerContext.setLecturer(lecturer);
      groupContext.setGroup(undefined);
    } else {
      let groupId = query.get("groupId");
      const localStorageLecturerId = getLocalStorageItem("groupId")
      if(!groupId && localStorageLecturerId){
        groupId = localStorageLecturerId
        history.replace("?groupId=" + localStorageLecturerId);
      }
      const group = list.find(x => x.id === groupId) as Group;
      groupContext.setGroup(group);
      lecturerContext.setLecturer(undefined);
    }
    setOptions(prepareList(list));
  }, [list, history, isLecturer, query]);

  const onOptionChange = (option: ListOption<string>) => {
    if (isLecturer) {
      const lecturer = list.find(x => x.id === option.value) as Lecturer;
      lecturerContext.setLecturer(lecturer);
      history.push("?lecturerId=" + option.value);
      setLocalStorageItem("lecturerId", option.value)
    } else {
      const group = list.find(x => x.id === option.value) as Group;
      groupContext.setGroup(group);
      history.push("?groupId=" + option.value);
      setLocalStorageItem("groupId", option.value)
    }
  };

  const initialValue =
    options.find(item =>
      isLecturer ? item.value === lecturerContext.lecturer?.id : item.value === groupContext?.group?.id
    );

  return (
    <Label>
      Розклад занять для
      <div style={{ width: "200px" }}>
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
